// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedSubtotal = 0;
const itemDetails = [];

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalPrice = product.price - discount;
    discountedSubtotal += finalPrice;

    itemDetails.push({
        item: product.item,
        originalPrice: product.price,
        discountPercent: discountRate * 100,
        finalPrice
    });
}

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let finalTotal = discountedSubtotal;

// Apply extra 5% only when the original cart total is greater than 50000
if (originalTotal > 50000) {
    finalTotal *= 0.95;
}

console.log("Dynamic Discount Evaluator");
console.log("---------------------------");
console.table(itemDetails);
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`After item discounts: ₹${discountedSubtotal.toFixed(2)}`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
