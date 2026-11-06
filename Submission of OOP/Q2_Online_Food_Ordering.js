// Q2: Online Food Ordering (map + reduce + Error Handling)
const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Sandwich", price: 90 },
    { name: "Pasta", price: 180 }
];

function calculateBill(orderItems) {
    const prices = orderItems.map(itemName => {
        const item = menu.find(menuItem => menuItem.name.toLowerCase() === itemName.toLowerCase());
        if (!item) throw new Error(`"${itemName}" is not available on the menu.`);
        return item.price;
    });

    return prices.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Burger", "Pizza", "Pasta"];
    console.log("Order:", order.join(", "));
    console.log("Total bill: Rs.", calculateBill(order));
} catch (error) {
    console.error("Unable to place order:", error.message);
}

try {
    console.log("Second bill:", calculateBill(["Burger", "Sushi"]));
} catch (error) {
    console.error("Unable to place order:", error.message);
}
