class Bank{
    constructor(){
        this._accounts = [];
    }

    static nextNumber = 1000;

    getAccounts(){
        return this._accounts;
    }

    addAccount(){
        let account = new Account(Bank.nextNumber);
        this._accounts.push(account);
        Bank.nextNumber++;
        
        return account;
    }

    addSavingAccount(interest){
        let account = new SavingsAccount(Bank.nextNumber, interest);
        this._accounts.push(account);
        Bank.nextNumber++;

        return account;
    }

    addCheckingAccount(overdraftLimit){
        let account = new CheckingAccount(Bank.nextNumber, overdraftLimit);
        this._accounts.push(account);
        Bank.nextNumber++;

        return account;
    }


    closeAccount(number){
        this._accounts.forEach(acc => {
            if(acc.getNumber() === number){
                let index = this._accounts.indexOf(acc);
                this.getAccounts().splice(index, 1);
            }
        });
    }


    accountReport(){
        let report = '';
        this.getAccounts().forEach((acc) => {
            report += acc.toString() + "\n";
        });

        return report;
    }


    endOfMonth(){
        let report = '';
        this.getAccounts().forEach((acc) => {
            report += acc.endOfMonth() + "\n";
        });

        return report;
    }
}