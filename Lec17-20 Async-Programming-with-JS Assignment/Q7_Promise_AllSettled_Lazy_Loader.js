// Q7: Promise.allSettled() for dashboard modules
function loadModule(moduleName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) reject(new Error(`${moduleName} failed to load`));
            else resolve(`${moduleName} Loaded`);
        }, delay);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadModule("Profile", 2000),
        loadModule("Posts", 1500),
        loadModule("Messages", 1000)
    ]);

    results.forEach((result, index) => {
        const moduleNames = ["Profile", "Posts", "Messages"];
        if (result.status === "fulfilled") {
            console.log(`${moduleNames[index]} succeeded: ${result.value}`);
        } else {
            console.error(`${moduleNames[index]} failed: ${result.reason.message}`);
        }
    });

    console.log(`Total time taken: ${Date.now() - startTime} ms`);
}

loadDashboard();
