/*
btnElem.addEventListener('click',()=>console.log("Hello"
))
/*
const handler = ()=>console.log("Hi");

btnElem.addEventListener('click',handler);
btnElem.removeEventListener('click',handler)
const pElem = document.addEventListener('.text')

pElem.addEventListener('click',()=>console.log("hello,p"));
*/
/*
function random_color() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}

function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  const col = `rgb(${r},${g},${b})`;
  return col;
}
console.log(randomColor());

const btnElem = document.querySelector(".btn");
btnElem.addEventListener(
  "click",
  () => (btnElem.style.backgroundColor = randomColor())
);


*/
/*
const btnElem = document.querySelector(".btn");
const pElem = document.querySelector('.text');

function randomNum (){
    let a = Math.round((Math.random() * 5)+1)
    return a;
}

btnElem.addEventListener('click',
()=> (pElem.innerText = `${randomNum()},${randomNum()}`)
)*/

let data = [
  { id: 1, title: "Velo", price: 45000 },
  { id: 2, title: "Ski", price: 7500 },
  { id: 3, title: "Moto", price: 87500 },
];
const add_form = document.querySelector(".add_form");
const products = document.querySelector(".products");

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  const id = Date.now();
  if(title.length>0){
    data.push({id, title, price });
  }
  add_form.title.value = "";
  add_form.price.value = "";
  rerender();

});


function randomColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  return`rgb(${b},${g},${b})`
}

function deleteProduct(id){
  data = data.filter(product=>product.id!==id)
  rerender()
}

function madeCard(id,title,price){
  const container = document.createElement("div");
      const elem_p_title = document.createElement("p");
      const elem_p_price = document.createElement("p");
      const elem_button_del = document.createElement("button");
      elem_button_del.innerText = "Delete";
      elem_button_del.addEventListener("click", () =>deleteProduct(id));

      elem_p_title.innerText = title;
      elem_p_price.innerText = price;
      container.classList.add("product");
      container.addEventListener('mousemove',()=>{container.style.backgroundColor = randomColor()})
      container.append(elem_p_title, elem_p_price, elem_button_del);
  return container;
}




function rerender() {
  products.innerText = "";
  if (data.length === 0) {
    const elem_p_emptyArr = document.createElement("p");
    elem_p_emptyArr.innerText = "   Product is not found.";
    products.append(elem_p_emptyArr);
  } else {
    data.forEach(({id,title,price}) => {
      const container = madeCard(id,title,price);
      products.append(container);
    });
  }
}
rerender();

