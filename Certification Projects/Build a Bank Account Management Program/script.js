class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    return (
      "Deposits: " +
      this.transactions
        .filter((t) => t.type === "deposit")
        .map((t) => t.amount)
        .join(",")
    );
  }

  listAllWithdrawals() {
    return (
      "Withdrawals: " +
      this.transactions
        .filter((t) => t.type === "withdraw")
        .map((t) => t.amount)
        .join(",")
    );
  }
}

const myAccount = new BankAccount();
myAccount.deposit(200);
myAccount.deposit(100);
myAccount.withdraw(50);
myAccount.deposit(75);
myAccount.withdraw(25);
console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());