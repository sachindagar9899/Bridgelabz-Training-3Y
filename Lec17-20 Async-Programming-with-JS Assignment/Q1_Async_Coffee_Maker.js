// Q1: Asynchronous Coffee Maker using Promise chaining
function waitRandomStep(message) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            if (Math.random() < 0.15) reject(new Error(`${message} failed.`));
            else {
                console.log(message);
                resolve();
            }
        }, delay);
    });
}

waitRandomStep("Water boiled")
    .then(() => waitRandomStep("Coffee brewed"))
    .then(() => waitRandomStep("Coffee poured into the cup"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.error("Coffee process error:", error.message));
