"use strict";
// Q8 – Strict Mode Showdown
// Original code errors in strict mode: duplicate parameters are forbidden,
// undeclared assignment to total is forbidden, and deleting an identifier is illegal.
// Correct ES6 version:
function demo(first, second) {
    const total = 10;
    console.log(`Arguments: ${first}, ${second}`);
    console.log(`Total: ${total}`);
    const temporaryData = { total };
    delete temporaryData.total; // Deleting an object property is allowed.
    console.log("Property deleted:", !("total" in temporaryData));
}
demo(5, 10);

// To compare non-strict behavior, run the original snippet separately as a classic
// non-strict script. It is intentionally not executed in this strict-mode file.
