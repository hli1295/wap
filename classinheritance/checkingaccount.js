"use strict";
class CheckingAccount extends Account{
    constructor(number, limitAmount){
        super(number);
        this.limitAmount = limitAmount;
    }
    set limitAmount(limitAmount){
        this._limitAmount = limitAmount;
    }
    get limitAmount(){
        return this._limitAmount;
    }
    withdraw(amount){
        if(amount<=this.getBalance())
            super.withdraw(amount);
        else{
            if(this._limitAmount < amount - this.getBalance())
                throw new Error("can't withdraw");
            else{
                this._balance=this._balance-amount;
            }
        }
    }
    endOfMonth(){
        if(this.getBalance()<0){
            return `Warning, low balance ${this.toString()}`; 
        }
        return toString();
    }
    toString(){
        return "CheckingAccount " + this._number + ": balance " + this._balance+": over draft "+this._limitAmount;
    }
}