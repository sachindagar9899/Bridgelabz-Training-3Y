// Q9: Shopping Cart Total and Coupon Validation
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        if (!name || price < 0 || quantity <= 0) {
            throw new Error("Provide a name, non-negative price, and positive quantity.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(coupon) {
        // Accepted formats: SAVE20, DISC10, etc. The trailing digits are the percentage.
        if (!/^(SAVE|DISC)(\d{1,2})$/.test(coupon)) {
            throw new Error("Invalid coupon. Use a code such as SAVE20 or DISC10.");
        }
        const percent = Number(coupon.match(/\d+$/)[0]);
        if (percent > 100) throw new Error("Coupon discount cannot exceed 100%.");
        return this.getTotal() * (1 - percent / 100);
    }
}

const cart = new Cart();
cart.addItem("Shoes", 2000, 1);
cart.addItem("T-Shirt", 800, 2);

console.log("Cart total: Rs.", cart.getTotal());
try {
    console.log("Total after SAVE20: Rs.", cart.applyCoupon("SAVE20").toFixed(2));
} catch (error) {
    console.error(error.message);
}
