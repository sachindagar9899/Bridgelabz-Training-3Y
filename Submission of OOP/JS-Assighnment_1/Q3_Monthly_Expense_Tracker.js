// Q3. Monthly Expense Tracker
const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1500 },
    { category: "Rent", amount: 8000 },
    { category: "Bills", amount: 1800 },
    { category: "Leisure", amount: 1200 }
];

let total = 0;
for (const expense of expenses) {
    total += expense.amount;
}

const average = total / expenses.length;
total += total * 0.10; // Add 10% tax using an assignment operator.
const finalAmount = total;

console.table(expenses);
console.log(`Total before tax: ₹${(average * expenses.length).toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
