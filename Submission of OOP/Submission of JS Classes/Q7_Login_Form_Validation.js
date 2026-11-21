// Q7: Login Form Validation using RegExp (self-contained browser UI)
const loginForm = document.createElement("form");
loginForm.innerHTML = `
  <h2>Login</h2>
  <label>Username <input name="username" required></label><br>
  <label>Password <input name="password" type="password" required></label><br>
  <button type="submit">Login</button>
  <p id="login-message"></p>
`;
document.body.appendChild(loginForm);

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    const errors = [];

    if (username.length < 5) errors.push("Username must contain at least 5 characters.");
    if (password.length < 8) errors.push("Password must contain at least 8 characters.");
    if (!/[A-Z]/.test(password)) errors.push("Password needs an uppercase letter.");
    if (!/[a-z]/.test(password)) errors.push("Password needs a lowercase letter.");
    if (!/\d/.test(password)) errors.push("Password needs a number.");
    if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password needs a special character.");

    const message = loginForm.querySelector("#login-message");
    message.textContent = errors.length ? errors.join(" ") : "Login validation successful!";
    message.style.color = errors.length ? "red" : "green";
});
