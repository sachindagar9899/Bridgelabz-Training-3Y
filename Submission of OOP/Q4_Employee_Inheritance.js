// Q4: Employee Inheritance and Runtime Polymorphism
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} manages the ${this.department} team and coordinates its work.`;
    }
}

const staff = [
    new Employee("Aman", "Development"),
    new Manager("Neha", "Engineering")
];

// The same method call produces different results according to object type.
staff.forEach(person => console.log(person.work()));
