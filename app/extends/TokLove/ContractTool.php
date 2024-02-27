<?php


namespace App\extends\TokLove;


class ContractTool
{
    // 合约工具类

    public static function unRealProfit2($position, $contract, $flat_price, $amount = null)
    {
        if (blank($flat_price)) return 0;

        if ($position['side'] == 1) {
            $spread = $contract['buy_spread'] ?? 0;
            $avg_price = PriceCalculate($position['avg_price'], '*', (1 + $spread), 8);
        } else {
            $spread = $contract['sell_spread'] ?? 0;
            $avg_price = PriceCalculate($position['avg_price'], '*', (1 - $spread), 8);
        }
        $settle_spread = $contract['settle_spread'] ?? 0;
//        $avg_price = $position['side'] == 1 ? PriceCalculate($position['avg_price'] ,'+', $spread,8) : PriceCalculate($position['avg_price'] ,'-', $spread,8); // 开仓均价

        if (blank($amount)) $amount = $position['paid_price'];
        if ($position['side'] == 1) {
            if ($flat_price > $avg_price) {
                // 盈利 结算滑点
                $flat_price = max($avg_price, PriceCalculate($flat_price, '*', (1 - $settle_spread), 8));
            }
            $profit = $amount == 0 ? 0 : ($flat_price - $avg_price) * $amount * ($contract['unit_amount'] / $avg_price);
            dd($flat_price, $avg_price, $profit);
        } else {
            if ($flat_price < $avg_price) {
                // 盈利 结算滑点
                $flat_price = min($avg_price, PriceCalculate($flat_price, '*', (1 + $settle_spread), 8));
            }
            $profit = $amount == 0 ? 0 : ($avg_price - $flat_price) * $amount * ($contract['unit_amount'] / $avg_price);
        }
        return custom_number_format($profit, 5);
    }

    public static function riskRate($account)
    {
        /**
         * 爆仓率 // (账户可用余额 + 持仓保证金 + 委托冻结保证金 + 未实现盈亏) / (持仓保证金 + 委托冻结保证金)
         */
        return PriceCalculate(($account['usable_balance'] + $account['used_balance'] + $account['freeze_balance'] + $account['totalUnrealProfit']), '/', ($account['used_balance'] + $account['freeze_balance']), 4);
    }

    // 风险率(爆仓率)

    /**
     * 计算预估强平价
     * 预估强平价 合约账户风险率=10.0%时的预估价格。此价格仅供参考，实际强平价以发生强平事件时成交的价格为准
     * @param $account // 合约账户
     * @param $position // 用户多仓
     * @param $unit_amount // 合约
     * @return string $flatPrice
     */
    public static function flatPrice($account, $position, $unit_amount)
    {
        $flat_risk_rate = 0.1;
        $flat_account_equity = $flat_risk_rate * ($account['used_balance'] + $account['freeze_balance']);
        $unRealProfit = $flat_account_equity - $account['usable_balance'] - $account['used_balance'] - $account['freeze_balance'];

        if ($position['paid_price'] == 0) {
            $flatPrice = '--';
        } else {
            if ($position['type'] == 1) { // 多仓
                $flatPrice = (($position['avg_price'] * $position['paid_price'] * ($unit_amount / $position['avg_price'])) + $unRealProfit)
                    / ($position['paid_price'] * ($unit_amount / $position['avg_price']));
            } else { // 空仓
                $flatPrice = (($position['avg_price'] * $position['paid_price'] * ($unit_amount / $position['avg_price'])) - $unRealProfit)
                    / ($position['paid_price'] * ($unit_amount / $position['avg_price']));
            }
            $flatPrice = $flatPrice <= 0 ? '--' : custom_number_format($flatPrice, 4);
        }
        return $flatPrice;
    }

    /**
     * 计算持仓未实现盈亏
     * 多仓未实现盈亏 =（1/持仓均价-1/最新成交价）* 多仓合约张数 * 合约面值
     * 空仓未实现盈亏 =（1/最新成交价-1/持仓均价）* 空仓合约张数 * 合约面值
     * @param $position //  仓位
     * @param $flat_price //  平仓价格
     * @param $unit_amount //  单位金额
     * @param $amount //  平仓数量
     * @return float|int
     */
    public static function unRealProfit($position, $flat_price, $unit_amount = 1, $amount = null)
    {
        if (blank($flat_price)) return 0;

        $avg_price = $position['paid_price'];
        if (blank($amount)) $amount = $position['quantity'];

        if ($position['type'] == 1) { // 多仓
            $profit = $amount == 0 ? 0 : ($flat_price - $avg_price) * $amount * ($unit_amount / $avg_price);
        } else { // 空仓
            $profit = $amount == 0 ? 0 : ($avg_price - $flat_price) * $amount * ($unit_amount / $avg_price);
        }
        return custom_number_format($profit, 6);
    }

}
