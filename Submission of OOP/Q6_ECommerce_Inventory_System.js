// Q6: E-Commerce Inventory System
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 25 },
    { id: 3, name: "Chair", category: "Furniture", price: 4500, stock: 3 },
    { id: 4, name: "Desk", category: "Furniture", price: 8000, stock: 8 },
    { id: 5, name: "Notebook", category: "Stationery", price: 60, stock: 100 }
];

function getLowStockProducts(items, limit = 5) {
    return items.filter(product => product.stock < limit);
}

function sortProductsByPrice(items) {
    return [...items].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(items) {
    return items.reduce((total, product) => total + product.price * product.stock, 0);
}

function groupByCategory(items) {
    return items.reduce((groups, product) => {
        if (!groups[product.category]) groups[product.category] = [];
        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:", getLowStockProducts(products));
console.log("Sorted by price:", sortProductsByPrice(products));
console.log("Total inventory value: Rs.", calculateTotalInventoryValue(products));
console.log("Grouped by category:", groupByCategory(products));
