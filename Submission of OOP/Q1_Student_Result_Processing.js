// Q1: Student Result Processing (reduce + Classes)
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) return 0;
        return this.marks.reduce((total, mark) => total + mark, 0) / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();
        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

const students = [
    new Student("Aman", [85, 90, 78, 88]),
    new Student("Riya", [65, 70, 62, 68]),
    new Student("Karan", [32, 40, 35, 38])
];

students.forEach(student => {
    console.log(`${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`);
});
