// Q9: Predict and Explain Execution Order
// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

// The synchronous statements run first. The Promise .then callback is a
// microtask, so it runs after the current script and before the timer callback
// (a macrotask), even when the timer delay is zero.
