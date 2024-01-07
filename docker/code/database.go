package main

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"time"
	"os"
)

func DatabaseInit() {
     mongoUri := os.Getenv("mongoUri")
     mysqlUri := os.Getenv("mysqlUri")
	for {
		//1.建立连接
		client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(mongoUri).SetConnectTimeout(5*time.Second))
		if err != nil {
			fmt.Println("连接失败")
			fmt.Print(err.Error())
			time.Sleep(5 * time.Second) // Wait for 5 seconds before retrying
			continue
		}

		// 检查连接
		err = client.Ping(context.TODO(), nil)
		if err != nil {
			fmt.Println("连接失败")
			fmt.Print(err.Error())
			time.Sleep(5 * time.Second) // Wait for 5 seconds before retrying
			continue
		}

		fmt.Println("Connected to MongoDB!")

		//2.选择数据库 marketData
		db = client.Database("marketData")

		//3.从Mysql中获取需要保存行情的交易对
		mysqlDb, err = gorm.Open(mysql.New(mysql.Config{
			DriverName: "mysql",                                                                            // 驱动名称
			DSN:        mysqlUri, // data source name, refer https://github.com/go-sql-driver/mysql#dsn-data-source-name
		}), &gorm.Config{})
		if err != nil {
			fmt.Println("连接失败")
			fmt.Print(err.Error())
			time.Sleep(5 * time.Second) // Wait for 5 seconds before retrying
			continue
		}

		break // Exit the loop if the connection is successful
	}
}
