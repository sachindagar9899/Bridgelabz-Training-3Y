// Q5: Image gallery with modal preview and propagation control
const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const largeImage = document.getElementById("largeImage");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.getElementById("closeModal");

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;
  largeImage.src = event.target.src.replace("/300/200", "/900/600");
  largeImage.alt = event.target.alt;
  imageModal.hidden = false;
});

function hideModal() {
  imageModal.hidden = true;
  largeImage.removeAttribute("src");
}
imageModal.addEventListener("click", hideModal);
modalContent.addEventListener("click", (event) => event.stopPropagation());
closeModal.addEventListener("click", hideModal);
