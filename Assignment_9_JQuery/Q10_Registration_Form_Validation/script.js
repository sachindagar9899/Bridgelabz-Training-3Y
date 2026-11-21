// Q10: Registration Form Validation
$(function () {
  // Demo-only list representing emails that are already registered.
  const existingEmails = ["admin@example.com", "user@example.com"];

  function validateInput($field, errorSelector, message) {
    const valid = !message;
    $(errorSelector).text(message);
    // .css() dynamically adds a red border to invalid fields.
    $field.css("border", valid ? "1px solid #cbd5e1" : "2px solid #dc2626");
    return valid;
  }

  function validateName() {
    return validateInput($("#regName"), "#nameError",
      $("#regName").val().trim() ? "" : "Name is required.");
  }

  function validateEmail() {
    const email = $("#regEmail").val().trim();
    let error = "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) error = "Enter a valid email address.";
    else if (existingEmails.includes(email.toLowerCase())) error = "This email is already registered.";
    return validateInput($("#regEmail"), "#emailError", error);
  }

  function validatePassword() {
    const password = $("#regPassword").val();
    return validateInput($("#regPassword"), "#passwordError",
      password.length >= 8 ? "" : "Password must be at least 8 characters.");
  }

  // Validate live as the user corrects each field.
  $("#regName").on("input blur", validateName);
  $("#regEmail").on("input blur", validateEmail);
  $("#regPassword").on("input blur", validatePassword);

  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();
    const allValid = [validateName(), validateEmail(), validatePassword()].every(Boolean);
    if (allValid) {
      $("#registrationSuccess").prop("hidden", false);
      this.reset();
      $("#registrationForm input").css("border", "1px solid #cbd5e1");
    } else {
      $("#registrationSuccess").prop("hidden", true);
    }
  });
});
