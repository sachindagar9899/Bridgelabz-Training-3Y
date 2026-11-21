// Q2: Live Character Counter with warning behavior
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const MAX_LENGTH = 100;

function updateCounter() {
  const remaining = MAX_LENGTH - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("limit", remaining === 0);
}

message.addEventListener("input", updateCounter);

// maxlength is the main limit. This keydown guard also demonstrates preventDefault().
message.addEventListener("keydown", (event) => {
  const isEditingKey = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key);
  const isShortcut = event.ctrlKey || event.metaKey;
  if (message.value.length >= MAX_LENGTH && !isEditingKey && !isShortcut && event.key.length === 1) {
    event.preventDefault();
  }
});

resetButton.addEventListener("click", () => {
  message.value = "";
  updateCounter();
  message.focus();
});
updateCounter();
