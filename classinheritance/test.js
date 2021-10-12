
// Account Testing

describe("Deposite", function () {
    let account;
    before(function(){
        account = new Account(1);
        account.deposit(100);

    });


    it("deposites money to account",
        function () {
            assert.equal(100, account.getBalance());
    });
});

describe("Withdraw", function () {
    let account;
    before(function(){
        account = new Account(1);
        account.deposit(100);
        account.withdraw(50);

    });


    it("withdraw money from account",
        function () {
            assert.equal(50, account.getBalance());
    });
});

describe("Illegal withdraw", function () {
    let account;
    let withdrawFunc;
    before(function(){
        account = new Account(1);
        account.deposit(100);
        
        withdrawFunc = function(){
            account.withdraw(150);
        }
    });


    it("warning for withdraw from account with insufficent balance",
        function () {
            assert.throws(withdrawFunc, Error, "Insufficient funds");
    });
});


// SavingAccount Testing

describe("Create saving Account", function () {
    let account;
    before(function(){
        account = new SavingsAccount(1, 3);
        account.deposit(100);

    });


    it("creates new saving account",
        function () {
            assert.equal(1, account.getNumber());
    });
});


describe("Add interest into current balance", function () {
    let account;
    before(function(){
        account = new SavingsAccount(1, 3);
        account.deposit(100);
        account.addInterest();
    });


    it("add interest to current balance",
        function () {
            assert.equal(103, account.getBalance());
    });
});


// checking accounts

describe("Create checking Account", function () {
    let account;
    before(function(){
        account = new CheckingAccount(1, 100);
        // account.deposit(100);

    });


    it("creates new checking account",
        function () {
            assert.equal(1, account.getNumber());
    });
});


describe("Withdrawal with amount more than overdraft", function () {
    let account;
    let withdrawFunc;
    before(function(){
        account = new CheckingAccount(1, 100);
        account.deposit(100);

        withdrawFunc = function(){
            account.withdraw(250);
        }
    });


    it("checks illegal withdraw from checking account",
        function () {
            assert.throws(withdrawFunc, Error, "Overdraft Limit exceded");
    });
});


// Bank

describe("Add account for a bank", function () {
    let bankA;
    before(function(){
        bankA = new Bank();
        bankA.addAccount();
    });


    it("adds account to a bank",
        function () {
            assert.equal(1000, bankA.getAccounts()[0].getNumber());
    });
});


describe("Add saving account for a bank", function () {
    let bankA;
    let account;
    before(function(){
        bankA = new Bank();
        bankA.addSavingAccount(4);
    });


    it("Adds saving account to a bank",
        function () {
            assert.equal(1001, bankA.getAccounts()[0].getNumber());
    });
});


describe("Add cheking account for a bank", function () {
    let bankA;
    let account;
    before(function(){
        bankA = new Bank();
        bankA.addAccount();
    });


    it("add checking account to a bank",
        function () {
            assert.equal(1002, bankA.getAccounts()[0].getNumber());
    });
});


describe("Close an account", function () {
    let bankA;
    let account;
    before(function(){
        bankA = new Bank();
        bankA.addAccount();
        bankA.closeAccount(1003);
    });


    it("close an account",
        function () {
            assert.equal(0, bankA.getAccounts().length);
    });
});


describe("End of month report", function () {
    let bankA;
    before(function(){
        bankA = new Bank();
        bankA.addAccount();
        bankA.addSavingAccount(4);
        bankA.addCheckingAccount(200);

        bankA.getAccounts().forEach((acc) => {
            acc.deposit(100);

        });

        bankA.getAccounts()[2].withdraw(150);
    });


    it("end of month report for accounts in a bank",
        function () {
            assert.equal("\nInterest added SavingAccount 1005: balance: 100 interest: 4\n" +
             "Warning, low balance CheckingAccount 1006: balance: -50 overdraft limit: 200\n"
            , bankA.endOfMonth());
    });
});
