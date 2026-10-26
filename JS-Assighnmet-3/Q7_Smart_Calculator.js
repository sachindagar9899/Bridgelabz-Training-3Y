"use strict";
// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unsupported operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add": return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) throw new Error("Cannot divide by zero");
            return firstNumber / secondNumber;
        case "power": return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) throw new Error("Cannot calculate real square root of a negative number");
            return Math.sqrt(firstNumber);
        case "subtract": return firstNumber - secondNumber;
        default: throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        console.log(`${operation.toUpperCase()}: ${calculate(operation, num1, num2)}`);
    } catch (error) {
        console.log(`${operation.toUpperCase()} ERROR: ${error.name} - ${error.message}`);
    }
}
try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`CUSTOM ERROR: ${error.name} - ${error.message}`);
}
