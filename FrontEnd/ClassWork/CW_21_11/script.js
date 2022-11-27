/*const elem = document.querySelector('p');
console.log(elem.innerText);
//console.log(elem.innerHTML);
//console.log(elem.textContent);
console.log(elem);
const elements = document.querySelectorAll('p');
console.log(elements);
console.log(elements);

const a = [1,2,3,3];
function fn(a,b,c,d){
    return a+b+c+d
}
console.log(fn(...a));
const b1 = [4,3, ...a];
console.log(b1)
const c1 = [...a,3];
console.log(c1);
const text = [...elements].map(elem=>elem.innerText);
console.log(text);
const mainElem = document.getElementById('main');
const pList  = document.getElementsByTagName('p');
console.log(mainElem);
console.log(pList);*/
/*
const mainText = document.querySelector('.main p')

console.log(mainText.innerText);*/
/*
const text = document.querySelector('#main .info');
console.log(text.innerText);

const text2 = document.querySelector('#info div .main');
console.log(text2.innerText)
*/

const rootElem = document.querySelector('#root');
console.log(rootElem);

/*
const pElem = document.createElement('p');
pElem.innerText = 'I am new element';
rootElem.append(pElem);*/


//const words  =['velo','moto','ski'];



const products = [
    {
        title: 'велосипед',
        price: 45000,
        count:5,
        link: 'https://ex.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/330px-Alexandr_Ivanov_001.jpg'
    },
    {
        title: 'самокат',
        price: 25000,
        count:3,
        link: 'https://ex.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/330px-Alexandr_Ivanov_001.jpg'

    },
    {
        title: 'лыжи',
        price: 30000,
        count:0,
        link: 'https://ex.com',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/330px-Alexandr_Ivanov_001.jpg'
    }
];

products.forEach(({title,price,count,link,img})=>{
    const title_El = document.createElement('p');
    const price_El = document.createElement('p');
    const count_El = document.createElement('p');
    const link_El = document.createElement('a');
    const img_El = document.createElement('img');


    const container = document.createElement('div');
    
    container.append(img_El,title_El,price_El,count_El,link_El);
    rootElem.append(container);
    container.classList.add('product');
    link_El.innerText = 'подробнее...';
    link_El.href = link;
    link_El.target = '_blank';
    img_El.src = img;
    title_El.innerText = title;
    price_El.innerText = price;
    count_El.innerText = ((count!=0)?count:"Товар закончился")
});












