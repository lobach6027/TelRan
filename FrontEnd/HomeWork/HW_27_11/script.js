function write_local(item) {
  localStorage.setItem("item", JSON.stringify(item));
}
function read_local() {
  return JSON.parse(localStorage.getItem("item")) ?? [];
}

//const products = [];
const productsForm = document.querySelector(".formAdding");
const result = document.querySelector(".allOrder");
const orderBlock = document.querySelector(".order");

productsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const productName = productsForm.title.value;
  const productPrice = productsForm.price.value;
  const productCount = productsForm.count.value;
  const id = Date.now();
  read_local().push({ id, productName, productPrice, productCount });
  productsForm.title.value = "";
  productsForm.price.value = "";
  productsForm.count.value = "";
  rerend();
});

function delProduct(id) {
 let newArr = read_local().filter((product) => product.id != id);
 write_local(newArr);
 rerend();
}

function rerend() {
  orderBlock.innerText = "";
  if (read_local().length === 0) {
    const pElement = document.createElement("p");
    pElement.innerText = "No orders";
    orderBlock.append(pElement);
  } else {
    read_local().forEach((product) => {
      const container = document.createElement("div");
      const elem_name = document.createElement("h2");
      const elem_price = document.createElement("p");
      const fullPrice = document.createElement("p");
      const deleteBtn = document.createElement("button");
  
      deleteBtn.innerText = "delete this position";
      elem_name.innerText = product.productName;
      elem_price.innerText = product.productPrice + "$";
      const price = Number(product.productPrice) * Number(product.productCount);
      fullPrice.innerText = `${product.productPrice}*${product.productCount} = ${price} $`;
  
      container.append(elem_name, elem_price, fullPrice, deleteBtn);
      orderBlock.append(container);
  
      deleteBtn.addEventListener("click", () => delProduct(id));
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
  
    const container_div = document.createElement("div");
    const elemFullPrice = document.createElement("p");
    const elemFullCount = document.createElement("p");
    result.innerText = "Cost of selected items and count:";
    elemFullPrice.innerText = `Full price: ${summ} $`;
    elemFullCount.innerText = `Full count: ${sumCount}`;
  
    container_div.append(elemFullPrice, elemFullCount);
    result.append(container_div);
  }

 
}
