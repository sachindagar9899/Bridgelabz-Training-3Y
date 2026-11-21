"use strict";
// Q1 – Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let index = 0; index < apiData.length; index++) {
    const value = apiData[index];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);
    const blankString = typeof value === "string" && value.trim() === "";
    const valid = !blankString && value !== null && value !== undefined && Number.isFinite(numberValue);
    const report = { index, original: value, numberForm: numberValue, booleanForm: booleanValue, stringForm: stringValue };

    if (valid) {
        validNumbers.push(numberValue);
        console.log("[VALID]", report);
    } else {
        invalidNumbers.push(value);
        console.log("[INVALID NUMBER]", report);
    }
}
console.log("Valid numeric values:", validNumbers);
console.log("Invalid values:", invalidNumbers);
