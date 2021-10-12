"use strict";
class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
        this.interest = interest;
    }
    set interest(value){
        if(value<0)
         throw new Error("Negative Interest");
         this._interest = value;
    }
    get interest(){
        return this._interest;
    }
    addInterest(){
        return this.deposit(this.getBalance() * this.interest/100);
    }
    toString(){
        return `SavingAccount   ${this.getNumber()}  Balance : ${this.getBalance()} interest:${this._interest}`;
    }
    endOfMonth(){
        let prev=this.getBalance();
        this.addInterest();
        return `Interest added ${this.getBalance()-prev} ${this.toString()}`;
    }
}