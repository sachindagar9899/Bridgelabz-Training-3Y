// Q8: Order Processing with retry mechanism
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) resolve("Order submitted successfully");
            else reject(new Error("Temporary order submission failure"));
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            console.log(result);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed - ${error.message}`);
        }
    }

    throw new Error("Order could not be processed");
}

processOrder().catch(error => console.error(error.message));
