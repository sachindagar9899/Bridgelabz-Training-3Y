// Q3: Arrow function vs normal function and `this`
const user = {
    name: "Sachin",
    showName: () => {
        // Arrow functions do not create their own `this`.
        // In a typical Node.js/module or browser script, this.name is not user.name.
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName();

user.showName = function () {
    // A normal method receives `this` from the object before the dot.
    console.log("Normal function this.name:", this.name);
};

user.showName();
