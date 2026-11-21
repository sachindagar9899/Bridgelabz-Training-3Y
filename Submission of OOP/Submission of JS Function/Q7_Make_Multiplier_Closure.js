// Q7: Closure using makeMultiplier
function makeMultiplier(multiplier) {
    // The returned function remembers the multiplier from this outer scope.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure: the inner function retains access to `multiplier` even after
// makeMultiplier has finished executing.
