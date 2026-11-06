// Q8: Dynamic Object Updater (self-contained browser UI)
const user = { name: "John", email: "john@mail.com", age: 21 };

const updateForm = document.createElement("form");
updateForm.innerHTML = `
  <h2>Edit User</h2>
  <label>Name <input name="name"></label><br>
  <label>Email <input name="email" type="email"></label><br>
  <label>Age <input name="age" type="number"></label><br>
  <button type="submit">Update User</button>
  <h3>Updated user object</h3>
  <pre id="user-output"></pre>
`;
document.body.appendChild(updateForm);

Object.entries(user).forEach(([key, value]) => {
    updateForm.elements[key].value = value;
});

function displayUser() {
    updateForm.querySelector("#user-output").textContent = JSON.stringify(user, null, 2);
}
displayUser();

updateForm.addEventListener("submit", event => {
    event.preventDefault();
    user.name = updateForm.elements.name.value.trim();
    user.email = updateForm.elements.email.value.trim();
    user.age = Number(updateForm.elements.age.value);
    displayUser();
});
