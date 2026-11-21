// Q4. Academic Performance Evaluator
// Enter marks for five subjects, each out of 100.
const marks = [88, 91, 79, 86, 90];

const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

let result;
if (marks.some(mark => mark < 35)) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Average marks: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
