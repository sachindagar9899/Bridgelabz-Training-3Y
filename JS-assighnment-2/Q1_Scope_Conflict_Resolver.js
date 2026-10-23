// Q1. Scope Conflict Resolver

// Global bonus value
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local salary value
    let salary = 40000;
    let totalSalary = salary;

    // Add the global bonus only for permanent employees
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Base salary: ${salary}`);
    console.log(`Global bonus: ${bonus}`);
    console.log(`Total salary: ${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);

// Changing the global bonus affects later calculations
bonus = 6000;
console.log("\\nAfter changing global bonus:");
calculateSalary(true);
