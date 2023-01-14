const addform = document.querySelector(".add-form");
const productName = document.querySelector(".add-name");
const productWrapper = document.querySelector(".products-wrapper");

addform.addEventListener("submit", addProduct);

function addProduct(e) {
  e.preventDefault();
  const currentProduct = productName.value;
  const id = new Date().getTime().toString();
  console.log(id);
  if (currentProduct) {
    const element = document.createElement("div");
    element.setAttribute("id", id);
    element.classList.add("product");
    element.innerHTML = `<div class="product">
    <h5 class="product-name">${currentProduct}</h5>
    <div class="product-actions">
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Update</button>
    </div>
  </div>`;

    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteProduct);

    productWrapper.appendChild(element);

    addToLocalStorage(id, currentProduct);
    resetOptions();
  }
}

function resetOptions() {
  productName.value = "";
}

function deleteProduct() {}

function addToLocalStorage(id, name) {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
    let newProduct = {id,name}
  products.push(newProduct)
}
