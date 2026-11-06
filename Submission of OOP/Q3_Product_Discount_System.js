// Q3: Product Discount System using constructor function and prototype
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Shared prototype method: applies a discount and returns the new price.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }
    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Laptop", 60000),
    new Product("Headphones", 2500),
    new Product("Keyboard", 1500)
];

products.forEach((product, index) => {
    const discount = [10, 15, 20][index];
    console.log(`${product.name}: Original Rs.${product.price}, ${discount}% off, New Rs.${product.applyDiscount(discount).toFixed(2)}`);
});

// Abstraction: callers use applyDiscount(percent) without needing to repeat
// the internal discount calculation formula.
