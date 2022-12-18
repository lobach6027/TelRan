const form = document.querySelector(".add-form");
const id = document.querySelector(".idOfProduct");
const productsBlock = document.querySelector(".productsBlock");

function showProducts(){
  const array = localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[];
  if(array.length>0){
    array.forEach(element => {
    createCard(element.title,element.description,element.price)
    });
  }
}
showProducts()

function createCard(title, description, price) {
  const titleOfElem = document.createElement("h4");
  const descriptionOfElem = document.createElement("p");
  const priceOfElem = document.createElement("p");
  const container = document.createElement("p");
  container.classList.add('card');
  titleOfElem.innerText = title;
  descriptionOfElem.innerText = `Description:  ${description}`;
  priceOfElem.innerText = `Price:  ${price} $`;
  container.append(titleOfElem, descriptionOfElem, priceOfElem);
  productsBlock.append(container);
 
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const productId = e.target.id.value;

  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((resp) => resp.json())
    .then(({ title, description, price }) =>{
      createCard(title, description, price)
      addToLocalStorage(productId,title, description, price);
    }
     
    );
    e.target.id.value = "";
    
 
});


function addToLocalStorage(id,title, description, price){
  const array = localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[];
  console.log(array)
  const newProductId = {id,title, description, price};
  array.push(newProductId); 
  localStorage.setItem('products',JSON.stringify(array))
}
