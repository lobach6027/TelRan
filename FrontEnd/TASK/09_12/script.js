const form = document.querySelector(".add-form");
const productName = document.querySelector(".add-name");
const notification = document.querySelector(".notification");
const productsWrapper = document.querySelector(".products-wrapper");

const submitButton = document.querySelector('.submit-btn');

let editMode = false;
let editingProductName = '';





const showProducts = () => {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  if (products.length > 0) {
    products.forEach((element) => {
      createProducts(element.id, element.name);
    });
  }
};
showProducts();

const addProduct = (event) => {
  event.preventDefault();
  const currProduct = productName.value;
  const id = new Date().getTime().toString();
  if (currProduct && !editMode) {
    createProducts(id, currProduct);
    addToLocalSrorage(id, currProduct);
    showNotification("Product is added", "success");
    resetOptions();
  }else if(currProduct&&editMode){

console.log('-----')
  }
};

function createProducts(id, name) {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  element.classList.add("product");
  element.innerHTML = `
  <h5 class="product-name">${name}</h5>
  <div class="product-actions">
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Change orders</button>
</div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteProduct);
  const editBtn = element.querySelector('.edit-btn');
  editBtn.addEventListener('click',(e)=>{
editProduct(e);
  })
  productsWrapper.append(element);
}

function showNotification(text, className) {
  notification.style.display = "block";
  notification.classList.add(className);
  notification.querySelector(".notification-text").innerText = `${text}`;
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);

}

function addToLocalSrorage(id, name) {
  const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  const newProduct = { id, name };
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  console.log(products);
}
function resetOptions() {
  productName.value = "";
}
function deleteProduct(e) {
  const productElement = e.target.parentElement.parentElement;
  const id = productElement.id;
  productsWrapper.removeChild(productElement);
  removeFromLocalStorage(id);
  showNotification("product deleted", "danger"); 
}
function editProduct(e){
  editMode = true;
  
  const oldProductName = e.target.parentElement.previousElementSibling
submitButton.value = 'Save'
productName.value = oldProductName.innerText
}




function removeFromLocalStorage(id) {
  const products = getLocalStorage();

  let newProducts = products.filter((item) => item.id !== id);
localStorage.setItem('products',JSON.stringify(newProducts))
}

function getLocalStorage() {
  return localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
}

form.addEventListener("submit", addProduct);

/* 

1. Сделать универсальное уведомление. (принимать текст кнопки и цвет кнопки)
2. Сейчас данные сохраняются в локалсторедж, но при первой загрузке не отображаются,
    нужно отображать данные из локалстореджа при первой загрузке.
*/
