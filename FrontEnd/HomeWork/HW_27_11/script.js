const products = [];
const productsForm = document.querySelector(".formAdding");

productsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = productsForm.title.value;
  const productPrice = productsForm.price.value;
  const productCount = productsForm.count.value;
  products.push({ productName, productPrice, productCount });
  productsForm.title.value = "";
  productsForm.price.value = "";
  productsForm.count.value = "";
  rerend();
});
const result = document.querySelector(".allOrder");
const orderBlock = document.querySelector(".order");

function rerend() {
  orderBlock.innerText = "";
  products.forEach((product) => {
    const container = document.createElement("div");
    const elem_name = document.createElement("h2");
    const elem_price = document.createElement("p");
    const fullPrice = document.createElement("p");

    elem_name.innerText = product.productName;
    elem_price.innerText = product.productPrice + '$';

    const price = Number(product.productPrice) * Number(product.productCount);
    fullPrice.innerText = `${product.productPrice}*${product.productCount} = ${price} $`;

    container.append(elem_name, elem_price, fullPrice);
    orderBlock.append(container);
  });

  const priceOneTypeProduct = products.map(
    ({ productPrice, productCount }) =>
      Number(productPrice) * Number(productCount)
  );
  const sumCount = products.reduce(
    (sum, item) => sum + Number(item.productCount),
    0
  );
  const summ = priceOneTypeProduct.reduce((sum, item) => sum + item, 0);
  console.log(priceOneTypeProduct);

  const container_div = document.createElement("div");
  const elemFullPrice = document.createElement("p");
  const elemFullCount = document.createElement("p");
  result.innerText = "Cost of selected items and count:";
  elemFullPrice.innerText = `Full price: ${summ} $`;
  elemFullCount.innerText = `Full count: ${sumCount}`;

  container_div.append(elemFullPrice, elemFullCount);
  result.append(container_div);
}
