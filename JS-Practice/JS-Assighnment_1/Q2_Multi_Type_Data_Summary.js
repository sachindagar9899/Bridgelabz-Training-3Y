// Q2. Multi-Type Data Summary
const userName = "Sachin";
const age = 20;
const isStudent = true;
const skills = ["JavaScript", "Java", "Python"];
const user = { name: "Sachin", city: "Mathura" };
const middleName = null;
let address;

const report = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "skills", value: skills.join(", "), type: Array.isArray(skills) ? "array" : typeof skills },
    { label: "user", value: JSON.stringify(user), type: typeof user },
    { label: "middleName", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "address", value: String(address), type: typeof address }
];

console.table(report);
