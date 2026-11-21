"use strict";
// Q9 – JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];
const cleanData = [];
const errors = [];
const under18Users = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    try {
        const parsed = JSON.parse(rawData[index]);
        if (parsed.user === undefined || parsed.age === undefined) {
            throw new Error("Missing required key: user or age");
        }
        const age = Number(parsed.age);
        if (!Number.isFinite(age)) throw new Error("Age is not a valid number");
        const cleanRecord = { user: parsed.user, age };
        cleanData.push(cleanRecord);
        if (age < 18) under18Users.push(cleanRecord);
    } catch (error) {
        errors.push({ line: lineNumber, message: error.message });
        console.log(`Line ${lineNumber} error: ${error.message}`);
    }
}
console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Users under 18:", under18Users);
