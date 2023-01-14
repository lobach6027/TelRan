const form = document.querySelector(".add-form");
const id = document.querySelector(".idOfProduct");
const productsBlock = document.querySelector(".productsBlock");

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
    .then(({ id, title, description, price }) =>
      createCard(title, description, price)
    );

  e.target.id.value = "";
});

