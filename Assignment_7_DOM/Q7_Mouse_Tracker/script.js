// Q7: Track mouse coordinates and place a dot on double-click
const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", (event) => {
  const rect = trackingBox.getBoundingClientRect();
  const x = Math.round(event.clientX - rect.left);
  const y = Math.round(event.clientY - rect.top);
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY} | Box X: ${x}, Y: ${y}`;
});

trackingBox.addEventListener("dblclick", (event) => {
  const rect = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "red-dot";
  dot.style.left = `${event.clientX - rect.left}px`;
  dot.style.top = `${event.clientY - rect.top}px`;
  trackingBox.appendChild(dot);
});

trackingBox.addEventListener("mouseleave", () => {
  coordinates.textContent = "Mouse left the tracking box.";
});
