// Q3: Convert callback-based bug fetcher to Promise
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;
            if (shouldFail) {
                reject(new Error("Bug-tracking API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Fetched bugs:");
        console.table(bugs.map((bug, index) => ({ number: index + 1, issue: bug })));
    })
    .catch(error => console.error("Unable to fetch bugs:", error.message));
