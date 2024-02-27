package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/bson"
	"time"
)

var conn *websocket.Conn
var kline *websocket.Conn

func SubscribeInit() {
	logger.Info("开始订阅")

	for {
		// 使用带有自定义头部的Dialer来建立WebSocket连接
		conn, _, err = websocket.DefaultDialer.Dial(wsUrl, nil)
		kline, _, err = websocket.DefaultDialer.Dial(wsUrl, nil)
		//定时重启websocket服务,建立新的连接 成功订阅之后断开旧的连接
		if err != nil {
			// 处理错误
			logger.Println("dial:", err)
			time.Sleep(time.Second * 5)
			continue
		}

		go func() {
			// 创建一个定时器，每隔30秒就向tick通道发送当前的时间
			tick := time.Tick(30 * time.Second)

			for range tick {
				logger.Info("发送心跳")

				// 每隔30秒发送一次心跳
				err := conn.WriteMessage(websocket.TextMessage, []byte(`{"type":"heartbeat","msg":"ping"}`))
				if err != nil {
					logger.Error("write:", err)
					conn = nil // Set the connection to nil if there is an error
					continue
				}

				// 每隔30秒发送一次心跳
				err = kline.WriteMessage(websocket.TextMessage, []byte(`{"type":"heartbeat","msg":"ping"}`))
				if err != nil {
					logger.Error("write:", err)
					kline = nil // Set the connection to nil if there is an error
					continue
				}
			}
		}()
		break
	}

	//3.1从数据库中获取交易分类
	var marketCategory []MarketCategory
	mysqlDb.Table("market_categories").Find(&marketCategory)

	var market string

	var messageList = make([]string, 0)

	for _, category := range marketCategory {
		var markets []Market
		mysqlDb.Table("markets").Where("category_id = ?", category.Id).Find(&markets)

		if len(markets) == 0 {
			return
		}

		tickers := make([]string, 0)

		//循环导出交易对
		for _, item := range markets {
			//判断交易对是否存在 如果不存在则创建
			names, _ := db.ListCollectionNames(context.TODO(), nil)

			has := false

			for _, name := range names {
				if name == item.Symbol {
					has = true
					break
				}
			}

			if !has {
				db.CreateCollection(context.TODO(), item.Symbol)
				for _, s := range timeList {
					db.CreateCollection(context.TODO(), item.Symbol+"_"+s)
				}
			}

			tickers = append(tickers, item.Symbol)
		}

		//将市场Market拼接成{"symbol":"XAGUSD.XAUUSD.XPDUSD.UKOIL.NATGAS.USOIL","type":"price","language":"en_US"}
		for _, item := range tickers {
			market += item + "."
			for _, t := range timeList {
				messageList = append(messageList, fmt.Sprintf(`{"symbol":"%s","type":"kline","language":"en_US","time":"%s"}`, item, t))
			}
		}

	}
	market = market[:len(market)-1]

	var subscribeMsg = fmt.Sprintf(`{"symbol":"%s","type":"price","language":"en_US"}`, market)
	logger.Info(subscribeMsg)

	err = conn.WriteMessage(websocket.TextMessage, []byte(subscribeMsg))
	if err != nil {
		logger.Error("write:", err)
	}

	go func() {
		// Read messages from the WebSocket connection
		for {
			// Check the WebSocket connection
			if conn == nil {
				// If the connection is closed or has an error, sleep for a while and then continue the loop to reconnect
				time.Sleep(time.Second * 5)
				conn, _, err = websocket.DefaultDialer.Dial(wsUrl, nil)
				//重新发送订阅消息
				err = conn.WriteMessage(websocket.TextMessage, []byte(subscribeMsg))
				if err != nil {
					logger.Error("dial:", err)
					continue
				}
			}

			_, message, err := conn.ReadMessage()
			if err != nil {
				logger.Println("read:", err)
				conn = nil // Set the connection to nil if there is an error
				continue
			}

			//接收信息并解析成数组
			var data []GoMarketData
			err = json.Unmarshal(message, &data)
			if err != nil {
				logger.Println("json:", err)
				continue
			}

			for _, item := range data {
				//保存到mongoDB中
				collection := db.Collection(item.Symbol)

				//根据Symbol和Timestamp判断是否存在
				timestamp := item.T * 1000

				var result MarketData
				err := collection.FindOne(context.TODO(), bson.D{{"timestamp", timestamp}, {"symbol", item.Symbol}}).Decode(&result)

				//如果存在则不保存
				if err != nil {
					//转换成marketData
					var result = MarketData{
						Open:      item.Buy,
						High:      item.High,
						Low:       item.Low,
						Close:     item.Close,
						Symbol:    item.Symbol,
						Timestamp: timestamp,
						Volume:    item.Vol,
					}
					_, err = collection.InsertOne(context.TODO(), result)
					if err != nil {
						logger.Info(err)
					}
				} else {
					_, err := collection.UpdateOne(context.TODO(), bson.D{{"timestamp", timestamp}, {"symbol", item.Symbol}}, bson.D{{"$set", bson.D{{"open", item.Buy}, {"high", item.High}, {"low", item.Low}, {"close", item.Close}, {"volume", item.Vol}}}})
					if err != nil {
						logger.Info(err)
					}
				}

			}

		}
	}()

	//订阅K线数据
	for _, msg := range messageList {
		err = kline.WriteMessage(websocket.TextMessage, []byte(msg))
		if err != nil {
			logger.Error("write:", err)
		}
	}

	go func() {
		// Read messages from the WebSocket connection
		for {

			// Check the WebSocket connection
			if kline == nil {
				// If the connection is closed or has an error, sleep for a while and then continue the loop to reconnect
				time.Sleep(time.Second * 5)
				kline, _, err = websocket.DefaultDialer.Dial(wsUrl, nil)
				//重新发送订阅消息
				//订阅K线数据
				for _, msg := range messageList {
					err = kline.WriteMessage(websocket.TextMessage, []byte(msg))
					if err != nil {
						logger.Error("write:", err)
					}
				}
				if err != nil {
					logger.Error("dial:", err)
					continue
				}
			}

			logger.Info("接收Kline数据")
			_, message, err := kline.ReadMessage()
			if err != nil {
				logger.Println("read:", err)
				kline = nil // Set the connection to nil if there is an error
				continue
			}

			//接收信息并解析成数组
			var data GoMarketKline
			err = json.Unmarshal(message, &data)
			if err != nil {
				logger.Println("json:", err)
				continue
			}

			logger.Info(data)
			//保存到mongoDB中
			collection := db.Collection(data.Symbol + "_" + data.Period)

			var result MarketData
			err = collection.FindOne(context.TODO(), bson.D{{"id", data.ID}, {"symbol", data.Symbol}}).Decode(&result)

			//如果存在则不保存
			if err != nil {
				_, err = collection.InsertOne(context.TODO(), data)
				if err != nil {
					logger.Info(err)
				}
			} else {
				_, err := collection.UpdateOne(context.TODO(), bson.D{{"id", data.ID}, {"symbol", data.Symbol}}, bson.D{{"$set", bson.D{{"open", data.Open}, {"high", data.High}, {"low", data.Low}, {"close", data.Close}, {"volume", data.Vol}}}})
				if err != nil {
					logger.Info(err)
				}
			}
		}
	}()

}
