// Q3: Three-step form with validation and summary
const steps = [...document.querySelectorAll(".step")];
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const stepError = document.getElementById("stepError");
const summary = document.getElementById("summary");
const fields = [
  document.getElementById("userName"),
  document.getElementById("userEmail"),
  document.getElementById("userPassword")
];
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
  backButton.disabled = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Submit" : "Next";
  stepError.textContent = "";
}

function isCurrentFieldValid() {
  const field = fields[currentStep];
  const value = field.value.trim();
  if (!value) return false;
  if (currentStep === 1) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (currentStep === 2) return value.length >= 6;
  return true;
}

nextButton.addEventListener("click", () => {
  if (!isCurrentFieldValid()) {
    stepError.textContent = currentStep === 1
      ? "Enter a valid email address."
      : currentStep === 2 ? "Password must contain at least 6 characters." : "Name is required.";
    fields[currentStep].focus();
    return;
  }
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    document.getElementById("stepsForm").hidden = true;
    summary.hidden = false;
    summary.innerHTML = `<h2>Registration Summary</h2>
      <p><strong>Name:</strong> ${escapeHTML(fields[0].value.trim())}</p>
      <p><strong>Email:</strong> ${escapeHTML(fields[1].value.trim())}</p>
      <p><strong>Password:</strong> ${"*".repeat(fields[2].value.length)}</p>
      <p class="success">All steps completed successfully!</p>`;
  }
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}
showStep(currentStep);
