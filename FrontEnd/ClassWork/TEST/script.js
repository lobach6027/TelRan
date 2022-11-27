/*const add_form = document.querySelector(".add_form");

const data = [];
add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  data.push({ title, price });
  add_form.title.value = "";
  add_form.price.value = "";
  rerender()
});

const products_div = document.querySelector(".products");

function rerender() {
  products_div.innerText = ''
 data.forEach(({title,price})=>
 {
    const div_element = document.createElement("div");
    const title_element = document.createElement("p");
    const price_element = document.createElement("p");
    div_element.append(title_element, price_element);
    products_div.append(div_element);
title_element.innerText = title;
price_element.innerText = price;
  })
}
console.log(rerender());

const elem = document.querySelector('.someText');
console.log(elem.innerText);
*/
/*
const list = document.querySelectorAll('p');
console.log(list);
const arrayList = [...list];
console.log(arrayList);


const plist = document.getElementsByTagName('p')
console.log(plist);

const a = document.querySelector('.main p')
console.log(a.innerText);
*/

//const b = document.querySelector('#info div .main');
//console.log(b.innerText);
/*
const arr = ['velo','moto','car']


const div_elem = document.querySelector('div')

arr.forEach(transport =>{
  let element = document.createElement('p');
  element.innerText = transport;
div_elem.append(element);

})
*/

const transport = [
  { title: "ski", price: 15000, count: 2, link:'https://prog-center.pro/frontend/7 ', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/220px-Monet_-_Monets_Garten_in_Giverny.jpg' },
  { title: "ski", price: 15000, count: 5, link:'https://prog-center.pro/frontend/7 ', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/220px-Monet_-_Monets_Garten_in_Giverny.jpg'},
  { title: "ski", price: 15000, count: 0, link:'https://prog-center.pro/frontend/7 ', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/220px-Monet_-_Monets_Garten_in_Giverny.jpg'},
  { title: "ski", price: 15000, count: 2, link:'https://prog-center.pro/frontend/7 ', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/220px-Monet_-_Monets_Garten_in_Giverny.jpg'},
];

let div_elem = document.querySelector("div");

transport.forEach(({title,price,count,link,img}) => {
  let container = document.createElement("div");
  let element_title = document.createElement("p");
  let element_price = document.createElement("p");
  let element_count = document.createElement("p");
  let element_link = document.createElement("a")
  let element_img = document.createElement("img")

  element_title.innerText = title;
  element_price.innerText = price;
  element_count.innerText = (count===0?'false':count);
  element_link.innerText = 'read more...'
  element_link.href = link;
  element_link.target = '_blank'
  element_img.src = img 
  container.append(element_title, element_price,element_count,element_link,element_img);
  div_elem.append(container);
  container.classList.add('products')
});
