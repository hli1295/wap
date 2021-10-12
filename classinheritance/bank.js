"use strict";
class Bank{
    constructor(){
        this._accounts=[];
    }
    getAccount(idx){
        return this._accounts[idx];
    }
    total(){
        return this._accounts.length;
    }
    addAccount(number){
        this._accounts.push(new Account(number));
        return this._accounts.length;
    }
    addSavingsAccount(number,interest){
        this._accounts.push(new SavingsAccount(number,interest));
        return this._accounts.length;
    }
    addCheckingsAccount(number,overdraft){
        this._accounts.push(new CheckingAccount(number,overdraft));
        return this._accounts.length;
    }
    closeAccount(number){
        for(let i in this._accounts){
            if(this._accounts[i].getNumber()===number){
                this._accounts.splice(i);
                break;
            }
        }
    }
    accountReport(){
        return this._accounts.reduce((acc,ele,idx,array)=>{
            return acc+Bank.nextNumber(this,idx)+"\n";
        },"").trim();
    }
    endOfMonth(){
        return this._accounts.reduce((acc,el)=>acc+el.endOfMonth()+"\n","");
    }
    static nextNumber(bank,idx){
        return bank.getAccount(idx).getNumber();
    }

}