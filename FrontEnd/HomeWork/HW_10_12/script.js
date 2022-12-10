const form = document.querySelector(".formAdding");
const orderContainer = document.querySelector(".order");
const allorderContainer = document.querySelector(".allOrder");

// Считываем товары которые было добавлены ранее, если их нет создаем новый масив

function write_local(arrayOfProducts) {
  localStorage.setItem("prod", JSON.stringify(arrayOfProducts));
}
function read_local() {
  return JSON.parse(localStorage.getItem("prod")) ?? [];
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // принимаем значения от пользователя, заливаем в общий масив, очищаем форму
  const productName = event.target.title.value;
  const productPrice = event.target.price.value;
  const productCount = event.target.count.value;
  const id = Date.now();
  //3.после добавления элем добавл в локал стор.
  write_local([
    ...read_local(),
    { id, productName, productPrice, productCount },
  ]);
  event.target.title.value = "";
  event.target.price.value = "";
  event.target.count.value = "";
  rerender();
});

function rerender() {
  orderContainer.innerText = "";

  if (read_local().length === 0) {
    const info = document.createElement("p");
    info.innerText = "There are no products selected...";
    orderContainer.append(info);
  } else {
    read_local().forEach(({ id, productName, productPrice, productCount }) => {
      const newCard = createCard(id, productName, productPrice, productCount);
      orderContainer.append(newCard);
      
    });
    //расчет общей стоимости и количества товаров
    allorderContainer.innerText = ''
    const fullCost = document.createElement("p");
      const fullCount = document.createElement("p");
      allorderContainer.append(fullCost, fullCount);
      fullCost.innerText = `Full cost: ${read_local().reduce(
        (sum, item) => sum + Number(item.productPrice),
        0
      )} $`
      fullCount.innerText = `Full count: ${read_local().reduce(
        (sum, item) => sum + Number(item.productCount),
        0
      )}`
  }
}

rerender();

function createCard(id, productName, productPrice, productCount) {
  const elTitle = document.createElement("h5");
  const elCostCalc = document.createElement("p");
  const elPrice = document.createElement("p");
  const elBtn = document.createElement("button");
  const container = document.createElement("div");

  container.append(elTitle, elPrice, elCostCalc, elBtn);

  elBtn.innerText = "delete this position";
  elTitle.innerText = productName;
  elPrice.innerText = productPrice + " $";
  elCostCalc.innerText = `${productPrice}*${productCount} = ${
    productPrice * productCount
  } $`;

  elBtn.addEventListener("click", () => deleteCard(id));

  return container;
}

function deleteCard(id) {
  const newArray = read_local().filter((item) => item.id !== id);
  write_local(newArray);
  rerender();
}

