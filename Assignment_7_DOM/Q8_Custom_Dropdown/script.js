// Q8: Custom dropdown. Document capture phase closes it on outside clicks.
const dropdown = document.getElementById("dropdown");
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownOptions = document.getElementById("dropdownOptions");
const chosenOption = document.getElementById("chosenOption");

dropdownToggle.addEventListener("click", () => {
  const willOpen = dropdownOptions.hidden;
  dropdownOptions.hidden = !willOpen;
  dropdownToggle.setAttribute("aria-expanded", String(willOpen));
});

dropdownOptions.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;
  dropdownToggle.textContent = event.target.textContent;
  chosenOption.textContent = `Selected: ${event.target.textContent}`;
  dropdownOptions.hidden = true;
  dropdownToggle.setAttribute("aria-expanded", "false");
});

// Capturing phase (true) lets this listener inspect clicks before bubbling handlers.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdownOptions.hidden = true;
    dropdownToggle.setAttribute("aria-expanded", "false");
  }
}, true);
