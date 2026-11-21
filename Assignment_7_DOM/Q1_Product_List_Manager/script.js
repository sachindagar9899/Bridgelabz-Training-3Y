// Q1: Dynamic Product List Manager using event delegation
const productInput = document.getElementById("productInput");
const addProductButton = document.getElementById("addProduct");
const productList = document.getElementById("productList");

function addProduct() {
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit-btn";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
  productInput.focus();
}

addProductButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

let editingItem = null;
function saveEdit() {
  if (!editingItem) return;
  const input = editingItem.querySelector("input");
  const span = document.createElement("span");
  span.className = "product-name";
  span.textContent = input.value.trim() || "Unnamed product";
  input.replaceWith(span);
  editingItem = null;
}

// One listener on the parent handles all Edit/Delete buttons.
productList.addEventListener("click", (event) => {
  const listItem = event.target.closest("li");
  if (!listItem) return;

  if (event.target.classList.contains("delete-btn")) {
    if (editingItem === listItem) editingItem = null;
    listItem.remove();
  } else if (event.target.classList.contains("edit-btn")) {
    if (editingItem && editingItem !== listItem) saveEdit();
    const span = listItem.querySelector(".product-name");
    if (span) {
      const input = document.createElement("input");
      input.value = span.textContent;
      input.className = "edit-input";
      span.replaceWith(input);
      editingItem = listItem;
      input.focus();
      input.select();
    } else {
      saveEdit();
    }
  }
});

document.addEventListener("click", (event) => {
  if (editingItem && !editingItem.contains(event.target)) saveEdit();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && editingItem) saveEdit();
  if (event.key === "Escape" && editingItem) saveEdit();
});
