class AccountDetail {
    private int accountNo;
    private double balance;

    public Account(int accountNo, double balance) {
        this.accountNo = accountNo;
        this.balance = balance;
    }

    public int getAccountNo() {
        return accountNo;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
        } else {
            System.out.println("Insufficient balance!");
        }
    }
}

class Savings extends Account {
    private double interestRate;

    public Savings(int accountNo, double balance, double interestRate) {
        super(accountNo, balance);
        this.interestRate = interestRate;
    }

    public double getInterestRate() {
        return interestRate;
    }
}

class Current extends Account {
    private double overdraftLimit;

    public Current(int accountNo, double balance, double overdraftLimit) {
        super(accountNo, balance);
        this.overdraftLimit = overdraftLimit;
    }

    public double getOverdraftLimit() {
        return overdraftLimit;
    }

    public void withdraw(double amount) {
        if (getBalance() + overdraftLimit >= amount) {
            setBalance(getBalance() - amount);
        } else {
            System.out.println("Insufficient balance!");
        }
    }
}

public class Account {
    public static void main(String[] args) {
        Savings s = new Savings(1001, 5000, 0.05);
        Current c = new Current(1002, 10000, 5000);

        System.out.println("Savings account:");
        System.out.println("Account No: " + s.getAccountNo());
        System.out.println("Balance: " + s.getBalance());
        System.out.println("Interest rate: " + s.getInterestRate());
        s.deposit(1000);
        s.withdraw(2000);
        System.out.println("Updated balance: " + s.getBalance());

        System.out.println("\nCurrent account:");
        System.out.println("Account No: " + c.getAccountNo());
        System.out.println("Balance: " + c.getBalance());
        System.out.println("Overdraft limit: " + c.getOverdraftLimit());
        c.deposit(2000);
        c.withdraw(15000);
        System.out.println("Updated balance: " + c.getBalance());
    }
}
