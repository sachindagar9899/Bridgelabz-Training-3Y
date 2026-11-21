// Q4: Concurrent deployment servers using Promise.all and Promise.race
function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.15) reject(new Error(`${serverName} deployment failed`));
            else resolve(`${serverName} deployed`);
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.error("Deployment error:", error.message));

Promise.race([serverA, serverB])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.error("First response failed:", error.message));
