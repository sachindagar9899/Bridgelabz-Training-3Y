// Q8: Custom Array.prototype.myMap implementation
// This mirrors the core behavior of map: callback(value, index, array),
// returns a new array, and does not change the original array.
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback, thisArg) {
        if (this == null) throw new TypeError("myMap called on null or undefined.");
        if (typeof callback !== "function") throw new TypeError("Callback must be a function.");

        const source = Object(this);
        const length = source.length >>> 0;
        const result = new Array(length);

        for (let index = 0; index < length; index++) {
            if (index in source) {
                result[index] = callback.call(thisArg, source[index], index, source);
            }
        }
        return result;
    };
}

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
