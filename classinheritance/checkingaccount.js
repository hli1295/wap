class CheckingAccount extends Account{
    constructor(number, overdraftLimit){
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit(){
        return this._overdraftLimit;
    }

    setOverdraftLimit(value){
        this._overdraftLimit = value;
    }

    withdraw(amount){
        
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this.getBalance() + this.getOverdraftLimit())) {
            
            throw Error("Overdraft Limit exceded");
        }

        this._balance -= amount;
    }


    endOfMonth(){
        let result = '';
        if(this.getBalance() < 0){
            result = "Warning, low balance CheckingAccount " + this.getNumber() + ": balance: " +
                        this.getBalance() + " overdraft limit: " + this.getOverdraftLimit();
        }

        return result;
    }


    toString(){
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance();
    }
}