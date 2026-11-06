// Q2: Student Form Validator (self-contained browser UI)
// Open this file in a browser. It creates its own form and validation messages.
const form = document.createElement("form");
form.innerHTML = `
  <h2>Student Registration</h2>
  <label>Name <input name="name" required></label><small data-error="name"></small><br>
  <label>Email <input name="email" required></label><small data-error="email"></small><br>
  <label>Phone <input name="phone" required></label><small data-error="phone"></small><br>
  <label>Password <input name="password" type="password" required></label><small data-error="password"></small><br>
  <button type="submit">Register</button>
  <p id="result"></p>
`;
document.body.appendChild(form);

const rules = {
    name: /^[A-Za-z ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    let valid = true;

    Object.entries(rules).forEach(([field, regex]) => {
        const input = form.elements[field];
        const error = form.querySelector(`[data-error="${field}"]`);
        const fieldValid = regex.test(String(data.get(field)).trim());
        input.style.border = fieldValid ? "2px solid green" : "2px solid red";
        error.textContent = fieldValid ? "" : `Invalid ${field}. Please check the value.`;
        error.style.color = "red";
        valid = valid && fieldValid;
    });

    form.querySelector("#result").textContent = valid
        ? "Registration successful!"
        : "Please correct the highlighted fields.";
});
