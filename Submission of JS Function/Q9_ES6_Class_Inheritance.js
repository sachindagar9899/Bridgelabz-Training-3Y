// Q9: Rewrite Person -> Student using ES6 classes
class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls the parent constructor and initializes this.name.
        this.branch = branch;
    }

    printBranch() {
        console.log("Branch:", this.branch);
    }
}

const student = new Student("Sachin", "Computer Science");
student.printName();
student.printBranch();

// This class-based version provides the same inheritance behavior as Q5's
// constructor/prototype version, with clearer syntax.
