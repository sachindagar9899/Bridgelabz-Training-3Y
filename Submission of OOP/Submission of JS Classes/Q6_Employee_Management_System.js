// Q6: Employee Management System
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) throw new Error("Bonus cannot be negative.");
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 40000),
    new Employee(2, "Riya", "HR", 35000),
    new Employee(3, "Karan", "Sales", 30000),
    new Employee(4, "Neha", "IT", 50000),
    new Employee(5, "Dev", "Finance", 45000)
];

employees[0].applyBonus(10);
employees.forEach(employee => {
    console.log(`${employee.name}: Annual salary = Rs.${employee.getAnnualSalary()}`);
});

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(), 0
);
console.log("Total annual company payout: Rs.", totalAnnualPayout);
