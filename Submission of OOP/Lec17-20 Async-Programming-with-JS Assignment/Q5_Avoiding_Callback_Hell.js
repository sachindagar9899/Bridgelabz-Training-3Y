// Q5: Callback Hell and its async/await equivalent
function runStageCallback(stage, callback) {
    setTimeout(() => {
        console.log(stage);
        callback();
    }, 1000);
}

console.log("Nested callback version:");
runStageCallback("Design", () => {
    runStageCallback("Build", () => {
        runStageCallback("Test", () => {
            runStageCallback("Deploy", () => {
                runStageCallback("Celebrate", () => console.log("Callback pipeline complete"));
            });
        });
    });
});

function runStage(stage) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stage);
            resolve();
        }, 1000);
    });
}

async function runCleanPipeline() {
    console.log("Async/await version:");
    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");
    console.log("Async/await pipeline complete");
}

// Start the second demonstration after the first has had time to finish.
setTimeout(runCleanPipeline, 5500);

// async/await makes sequential asynchronous steps read like ordinary
// top-to-bottom code and allows centralized try/catch error handling.
