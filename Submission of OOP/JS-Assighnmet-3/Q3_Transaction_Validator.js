"use strict";
// Q3 – Transaction Validator
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const validTransactions = [];
const invalidTransactions = [];

for (const transaction of transactions) {
    try {
        if (transaction === null) {
            const error = new Error("Null transaction entry");
            error.name = "NullEntryError";
            throw error;
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            const error = new Error("Missing transaction id or amount");
            error.name = "MissingPropertyError";
            throw error;
        }
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative");
            error.name = "NegativeAmountError";
            throw error;
        }
        validTransactions.push(transaction);
        console.log("Valid transaction:", transaction);
    } catch (error) {
        invalidTransactions.push({ transaction, errorType: error.name, message: error.message });
        console.log(`[${error.name}] ${error.message}`);
    }
}
console.log("Successful transactions:", validTransactions.length);
console.log("Failed transactions:", invalidTransactions.length);
console.log("Valid:", validTransactions);
console.log("Invalid:", invalidTransactions);
// Debug: set a breakpoint inside the loop and inspect transaction and both arrays.
