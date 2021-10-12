class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }

    getInterest(){
        return this._interest;
    }

    setInterest(rate){
        this._interest = rate;
    }

    addInterest(){
        let amount = this.getBalance() * (this.getInterest() / 100);
        this.deposit(amount);
    }

    endOfMonth(){
        let interestAdded = this.getBalance() * (this.getInterest() / 100);
        
        let result = 'Interest added SavingAccount ' + this.getNumber() + ': balance: ' + this.getBalance() + ' interest: ' + interestAdded;

        this.addInterest();

        return result;
    }

    toString() {
        return "Saving Account " + this.getNumber() + ": balance " + this.getBalance();
    }
}