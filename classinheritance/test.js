mocha.setup("bdd");
let assert = chai.assert;
describe("Account" ,function(){
    it("a new account must have zero balance", function(){
        assert.equal(new Account("1122").getBalance(),0.0);
    });
});
describe("Deposit", function(){
    it("throws an error when we provide negative number", function(){
        let account = new Account("111");
        assert.throw(()=>account.deposit(-1), Error);
    });
    it("when we provide the right amount",function(){
        let account = new Account("111");
        account.deposit(100);
        assert.equal(account.getBalance(),100);
    });
});
describe("Withdrawal", function(){
    it("throws error if we provide negative number",function(){
        let account = new Account("111");
        assert.throw(()=>account.withdraw(-100), Error);
    });
    it("throws error if we give more amount than have",function(){
        let account = new Account("111");
        account.deposit(100);
        if(account.getBalance<account.withdraw(100)){
            assert.throw(Error);
        }
    });
});
describe("SavingsAccount",function(){
    it("must throw error if the balance is zero",function(){
        let account=new SavingsAccount("1234",50);
        assert.throw(()=>account.addInterest(),Error);
    })
    it("must add the right amount of interest",function(){
        let account=new SavingsAccount("1234",50);
        account.deposit(100);
        account.addInterest();
        assert.equal(account.getBalance(),150);
    });
});
describe("CheckingAccount",function(){
    it("must throw error if provided negative amount",function(){
        let account=new CheckingAccount("100",120);
        assert.throw(()=>account.withdraw(-10),Error);
    });
    it("must allow up to overdraft amount",function(){
        let account=new CheckingAccount("120",100);
        account.withdraw(100);
        assert.equal(-100,account.getBalance());
    });
    it("must throw error if withdrawal is below overDraft",function(){
        let account=new CheckingAccount("100",120);
        assert.throw(()=>account.withdraw(121),Error);
    });
});

describe("Bank",function(){
    it("must return empty array if nothing is added",function(){
        let bank=new Bank();
        assert.equal(0,bank.total());
    });
    it("must add and close account",function(){
        let bank=new Bank();
        bank.addAccount("123");
        assert.equal(1,bank.total());
        bank.closeAccount("123");
        assert.equal(0,bank.total());
    });
    it("must generate report",function(){
        let bank=new Bank();
        bank.addAccount("1");
        bank.addAccount("2");
        bank.addAccount("3");
        bank.addAccount("4");
        bank.addAccount("5");
        bank.addAccount("6");
        assert.equal("1\n2\n3\n4\n5\n6",bank.accountReport());
    });
});
describe("end of month",function(){
    it("normal account must return empty string",function(){
        let acc=new Account("123");
        assert.equal("",acc.endOfMonth());
    });
    it("checking account with negative balance must start with warning",function(){
        let acc=new CheckingAccount("123",10);
        acc.withdraw(10);
        assert.equal(true,acc.endOfMonth().startsWith("Warning"));
    })
});
window.onload = function(){
    mocha.run();
}