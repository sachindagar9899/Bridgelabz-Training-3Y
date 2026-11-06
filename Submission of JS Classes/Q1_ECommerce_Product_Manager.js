// Q1: E-Commerce Product Manager
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) throw new Error("Invalid discount percentage.");
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `ID: ${this.id} | ${this.name} | ${this.category} | Rs.${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Phone", 18000, "Electronics"),
    new Product(3, "Mouse", 800, "Accessories")
];

products[0].applyDiscount(10);
products.forEach(product => console.log(product.displayDetails()));

console.log("Products priced above Rs.1000:");
products.filter(product => product.price > 1000)
    .forEach(product => console.log(product.displayDetails()));
