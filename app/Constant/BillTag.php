<?php

namespace App\Constant;

enum BillTag
{
    case Deposit;
    case AdminDeposit;
    case AdminDeduction;
    case RefusalOfDeposit;
    case WithdrawMoney;
    case WithdrawalAndRefund;
    case WithdrawalFees;
    case DemoAccountGift;
    case DemoAccountReset;
    case ContractOvernightFee;
    case ContractPositionOpeningFee;
    case ContractPositionAmount;
    case ContractLiquidationAndSettlement;
    case ContractPendingOrderHandlingFee;
    case ContractPendingOrderOpeningAmount;
    case ContractPendingOrderRefundOfOpeningAmount;
    case ContractPendingOrderRefundOfHandlingFee;
    case OptionsPositionAmount;
    case OptionsPositionOpeningFees;
    case OptionsSettlementAmount;
}
