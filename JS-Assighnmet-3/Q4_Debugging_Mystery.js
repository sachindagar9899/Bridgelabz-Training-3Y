"use strict";
// Q4 – Debugging Mystery
function showMessage() {
    // Strict mode throws ReferenceError when assigning to an undeclared variable.
    // Fix: declare the variable with const or let.
    const greeting = "Welcome";
    console.log(greeting);
}
showMessage();

// VS Code debug: set a breakpoint at the const line, press F5, add greeting to WATCH,
// and inspect Call Stack to see showMessage() as the active function.
