/*let number = prompt('enter number');
let square  = number=>number**2;
console.log(square(number));*/

/*const res = ('a'+ + 'c').toLowerCase();
console.log(res);*/
/*
let num1 = +prompt('enter first number')
let num2 = +prompt('enter second number')
*/
/*function bigestNum(num1,num2) {
    if((num1)> (num2)){
        return num1
    }else{
        return num2
    } 
}*/
//console.log((num1>num2)?num1:num2);

/*
function checkEven(number1){
    if(number1%2==0){
        return true
    }else{
        return false
    }
}
console.log(checkEven(5));*/
/*
const check = (value) => value % 2 === 0;

console.log(check(13));
console.log(check(12));


  let newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  console.log(newArray);

  const array = [12, 4, 3, 34, 3, 1, 5, 34];

  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if(array[i]%2 ===0){
        sum+=array[i]
    }
  }
console.log(sum)
let even_sum = 0;

//2 variant
array.forEach(elem => even_sum += elem%2===0? elem:0)
console.log(even_sum);
*/
const arr = [12, -5, 34, 2, -38, 6, 4];
/*arr.forEach((elem,index,arr)=>console.log(elem,index,arr));


function forEach(arr,callback){
    for (let i = 0; i < arr.length; i++) {
       callback(arr[i],i,arr) 
    }
}
forEach(arr,(elem,index,arr)=>console.log(elem,index,arr));

let r = arr.map(elem =>elem**2)

console.log(r);

let newArr = arr.map(elem => elem<0?elem*(-1):elem)
console.log(newArr);*/

/*const resalt = arr.filter(elem =>elem<0);
console.log(resalt);*/

//const result = arr.filter(item =>(item>-10 && item<10))

/*
const result = arr.find(elem =>elem < 0);
console.log(result);

const arr1 = ['велосипед', 'сaмокат', 'коньки', 'лыжи'];

const result1 = arr1.find(elem=>elem.length<7)
console.log(result1);
*/

const user = {
  name: "Anna",
  lastname: "Lobach",
  age: 20,
};
console.log(user.age);
console.log(user.name);

const products = [
  {
    id: 1,
    title: "велосипед",
    price: 45000,
  },
  {
    id: 2,
    title: "самокат",
    price: 15000,
  },
  {
    id: 3,
    title: "лыжи",
    price: 25000,
  },
  {
    id: 4,
    title: "скейт",
    price: 13000,
  },
  {
    id: 5,
    title: "коньки",
    price: 7000,
  },
];

products.forEach(product=> console.log(product.title))
let a = products.filter(product=> product.price<20000)
console.log(a);


let filterId = products.map(item =>( {
    title: item.title, 
    price: item.price}))
console.log(filterId);