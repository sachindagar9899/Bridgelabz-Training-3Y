"use strict";
// Q10 – Nested Hoisting and Closures
function outer() {
    console.log("Outer count before assignment:", count); // undefined
    var count = 5;
    function inner() {
        console.log("Inner count before assignment:", count); // undefined: inner var is hoisted locally
        var count = 10;
        console.log("Inner count after assignment:", count); // 10
    }
    inner();
    console.log("Outer count after inner():", count); // 5
}
outer();

// Arrow version: innerArrow has no local count, so it closes over outer's count.
function outerWithArrow() {
    var count = 5;
    const innerArrow = () => console.log("Arrow reads outer count:", count);
    innerArrow();
}
outerWithArrow();

// Debug: break at outer()'s first log; step into inner() and inspect Scope and Call Stack.
