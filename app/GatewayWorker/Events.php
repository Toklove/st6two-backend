<?php

namespace App\GatewayWorker;

use GatewayWorker\Lib\Gateway;
use Illuminate\Support\Facades\Log;

class Events
{

    protected static array $timeList = ['1M', "5M", '15M', '30M', '1H', '1D', '1M'];

    public static function onWorkerStart($businessWorker)
    {
        echo "BusinessWorker    Start\n";
    }

    public static function onConnect($client_id)
    {
        echo "new connection from ip " . $client_id . "\n";
    }

    public static function onWebSocketConnect($client_id, $data)
    {

    }

    public static function onMessage($client_id, $message)
    {
        $message_data = json_decode($message, true);
        echo $message_data['type'] . "\n";
        // 根据类型执行不同的业务
        //给客户端分组
        if ($message_data['type'] == 'subscribe') {
            $group = $message_data['symbol'];
            Gateway::joinGroup($client_id, $group);
            return;
        } else if ($message_data['type'] == 'unsubscribe') {
            Gateway::leaveGroup($client_id, $message_data['symbol']);
            return;
        } else if ($message_data['type'] == 'ping') {
            //设置心跳
            Gateway::sendToClient($client_id, json_encode(['type' => 'pong']));
        }
    }

    public static function sendToClient($symbol, $data)
    {
        //发送信息到群组
        echo "send to group " . $symbol . "\n";
        Gateway::sendToGroup($symbol, json_encode($data));
    }

    public static function onClose($client_id)
    {
        Log::info('close connection' . $client_id);
    }
}
