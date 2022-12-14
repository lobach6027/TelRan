const form = document.querySelector(".add-form");
const productName = document.querySelector(".add-name");
const notification = document.querySelector('.notification');
const productsWrapper = document.querySelector(".products-wrapper");










const showProducts = ()=> {
   const products = localStorage.getItem("products")
   ? JSON.parse(localStorage.getItem("products"))
   : [];
   if(products.length >0){
      products.forEach(element => {
         createProducts(element.id,element.name);
      });
   }
}
showProducts()
const addProduct = (event) => {
  event.preventDefault();
  const currProduct = productName.value;
  const id = new Date().getTime().toString();
  console.log(id);
  if (currProduct) {
    const element = document.createElement("div");
    element.setAttribute("id", id);
    element.classList.add("product");
    element.innerHTML = `
    <h5 class="product-name">${currProduct}</h5>
    <div class="product-actions">
      <button class="delete-btn">Delete</button>
      <button class="edit-btn">Change orders</button>
  </div>`;
    const deleteBtn = element.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", deleteProduct);
    productsWrapper.append(element);
    addToLocalSrorage(id, currProduct);
    showNotification();
    resetOptions();
  }
};

function showNotification(){
   notification.style.display = 'block'
setTimeout(()=>{
   notification.style.display = 'none'
},3000)
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
const resetOptions = () => {
  productName.value = "";
};
const deleteProduct = () => {};
form.addEventListener("submit", addProduct);

function createProducts(id,name){
   const element = document.createElement("div");
   element.setAttribute("id", id);
   element.classList.add("product");
   element.innerHTML = `
   <h5 class="product-name">${currProduct}</h5>
   <div class="product-actions">
     <button class="delete-btn">Delete</button>
     <button class="edit-btn">Change orders</button>
 </div>`;
   const deleteBtn = element.querySelector(".delete-btn");

   deleteBtn.addEventListener("click", deleteProduct);
   productsWrapper.append(element);
}
/* 

1. Сделать универсальное уведомление. (принимать текст кнопки и цвет кнопки)
2. Сейчас данные сохраняются в локалсторедж, но при первой загрузке не отображаются,
    нужно отображать данные из локалстореджа при первой загрузке.

