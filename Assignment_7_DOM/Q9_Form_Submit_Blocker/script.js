// Q9: Form validation, preventDefault(), live errors and success message
const accountForm = document.getElementById("accountForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const successMessage = document.getElementById("successMessage");

function validateField(field) {
  const value = field.value.trim();
  let error = "";
  if (field === nameField && !value) error = "Name is required.";
  if (field === emailField && (!value || !value.includes("@"))) error = "Enter an email containing @.";
  if (field === passwordField && value.length < 6) error = "Password must be at least 6 characters.";

  document.getElementById(`${field.id}Error`).textContent = error;
  field.classList.toggle("invalid", Boolean(error));
  return !error;
}

[nameField, emailField, passwordField].forEach((field) => {
  field.addEventListener("input", () => {
    validateField(field);
    successMessage.hidden = true;
  });
});

accountForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop the browser's normal form submission.
  const valid = [nameField, emailField, passwordField].map(validateField).every(Boolean);
  if (valid) {
    successMessage.hidden = false;
    accountForm.reset();
    [nameField, emailField, passwordField].forEach((field) => {
      document.getElementById(`${field.id}Error`).textContent = "";
      field.classList.remove("invalid");
    });
  } else {
    successMessage.hidden = true;
  }
});
