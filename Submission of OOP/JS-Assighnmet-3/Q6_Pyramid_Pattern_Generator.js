"use strict";
// Q6 – Pyramid Pattern Generator
// Default row limit is 5. Change userInput to e.g. "7" to test another limit.
const userInput = "";
const parsedLimit = Number(userInput);
const rowLimit = userInput.trim() !== "" && Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 5;

for (let row = 1; row <= rowLimit; row++) {
    let pattern = "";
    for (let column = 1; column <= row; column++) pattern += "* ";
    console.log(pattern.trim());
}

// Replace let with var to observe function scope and variable reuse in the debugger.
// Strict mode catches undeclared variables; it does not prohibit declared var variables.
