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



const data = [];
const add_form = document.querySelector('.add_form');
const products = document.querySelector('.products');

add_form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const title = add_form.title.value;
    const price = add_form.price.value;
    data.push({title,price})
    add_form.title.value = ''
    add_form.price.value = ''
    rerender()
})

function rerender(){
    products.innerText = '';
data.forEach(product=>{
   const container = document.createElement('div');
    const elem_p_title = document.createElement('p');
    const elem_p_price = document.createElement('p');
    
    elem_p_title.innerText = product.title;
    elem_p_price.innerText = product.price;

   container.append(elem_p_title,elem_p_price);

    products.append(container);
})}
