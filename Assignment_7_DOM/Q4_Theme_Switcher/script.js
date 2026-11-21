// Q4: Theme switcher using setAttribute()
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const savedTheme = document.getElementById("savedTheme");
const allowedThemes = ["light", "dark", "blue"];

function applyTheme(theme) {
  if (!allowedThemes.includes(theme)) return;
  // setAttribute is used for both the theme and the custom saved-theme attribute.
  document.body.setAttribute("data-theme", theme);
  document.body.setAttribute("data-saved-theme", theme);
  savedTheme.textContent = document.body.getAttribute("data-saved-theme");
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});
applyTheme("light");
