// Q2: Higher-order function applyOperation
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];
const doubled = applyOperation(numbers, number => number * 2);
const squared = applyOperation(numbers, number => number * number);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
