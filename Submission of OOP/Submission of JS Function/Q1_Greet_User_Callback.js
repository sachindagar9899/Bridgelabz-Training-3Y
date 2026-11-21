// Q1: greetUser with callback
function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greetUser("Sachin", showEndMessage);
