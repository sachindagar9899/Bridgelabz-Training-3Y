// Q2: Task Scheduler - Microtask vs Macrotask
console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask: Promise callback");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Microtask: Promise callback
// Macrotask: setTimeout callback
// Promise callbacks are queued as microtasks and are drained after the current
// synchronous script, before the event loop moves on to the timer macrotask.
