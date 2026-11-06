// Q7: Banking Application with private class field
class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) throw new Error("Initial balance cannot be negative.");
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);
console.log("Initial balance: Rs.", account.getBalance());
console.log("After deposit: Rs.", account.deposit(1500));

try {
    console.log("After withdrawal: Rs.", account.withdraw(2000));
    account.withdraw(10000); // Intentionally invalid to demonstrate error handling.
} catch (error) {
    console.error("Transaction failed:", error.message);
}

console.log("Final balance: Rs.", account.getBalance());
// account.#balance is inaccessible outside the class.
