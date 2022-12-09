/*const cars = [
  { mark: "Mersedes", model: "s600", year: "1999", price: 15000 },
  { mark: "BMW", model: "Q3", year: "2006", price: 81000 },
  { mark: "AUDI", model: "s600", year: "1999", price: 10000 },
  { mark: "TOYOTA", model: "s600", year: "1999", price: 16000 },
  { mark: "LEXUS", model: "s600", year: "1999", price: 11000 },
];

let a = cars.map((car) => car.mark + " " + car.model);
let b = cars.map((car) => `${car.mark} ${car.model}`);

// 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет
// объединенная строка `Марка Модель` и все остальные свойства
// [{ markModel : "Mercedes-Benz S600", year : "1999", price : 15000 },
//   { markModel : "BMW M3", year : "2002", price : 18000 }   ]

let newCar = cars.map((car) => {
  return {
    markModel: `${car.mark} ${car.model}`,
    year: car.year,
    price: car.price,
  };
});
console.log(newCar);

const newCar2 = cars.map(({ mark, model, price, year }) => {
  return {
    markModel: `${mark} ${model}`,
    price,
    year,
  };
});
console.log(newCar2);

const newCar3 = cars.map(({ mark, model, ...rest }) => {
  return {
    markModel: `${mark} ${model}`,
    rest,
  };
});
console.log(newCar3);

// Задача2. Посчитать среднюю цену всех автомобилей
// средняя цена = сумма всех цен / количество автомобилей

console.log(cars.length);
let avg_price = cars.reduce((prev, { price }) => prev + price, 0) / cars.length;
console.log(Math.round(avg_price));

let sum = 0;
for (let i = 0; i < cars.length; i++) {
  sum += cars[i].price;
}
console.log(sum / cars.length);

// Задача 3. Вернуть массив машин, которым меньше 20 лет.

let carLIst = cars.filter((car) => car.year > 2002);
console.log(carLIst);

let carLIst1 = cars.filter(({year}) => year > 2002);
console.log(carLIst1);

//object DATE


let carLIst3 = cars.filter(({year}) => year > 2002);
console.log(carLIst3);

let carLIst2 = cars.filter(({year}) => year > 2002);
console.log(carLIst1);



// Задача 3. Вернуть массив машин, которым меньше 20 лет. Array
let arrCars = [];
const date = new Date().getFullYear() //UTS 
console.log(date)
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year > date) {
    arrCars.push(cars[i]);
  }
}




let carLIst4 = cars.filter(({year},date) => year < (date-20));
console.log(carLIst4);


let carLIst5 = cars.filter(({year}) => new Date().getFullYear() - year < 20 );
console.log(carLIst5);

const users = [
    { name : "Arsen", bDay : "03/03/1998"},
    { name : "Ivan", bDay : "10/25/1990" },
    { name : "Alex", bDay : "07/05/1995" },
    { name : "Kostya", bDay : "02/12/2005" },
    { name : "Max", bDay : "05/07/2001" },
    { name : "Ann", bDay : "01/15/2002" },
    { name : "Julia", bDay : "09/13/2003" },
    { name : "Oksana", bDay : "10/25/2001" },
]

// Кто из пользователей старше 20? Для след. года тоже должно работать

let usersArr  = users.filter(({bDay})=>new Date().getFullYear() - new Date(bDay).getFullYear()>20 )
console.log(usersArr)


const names = ['Olla','Anna','Max']
console.log(names.sort())

const number = [1,5,7,2,3,12,11]
let sortArr = number.sort()
console.log(sortArr)

const num1= [40,15,28]
const sortArr1 = num1.sort((a,b)=>a-b);
console.log(sortArr1)



let sortCars = cars.sort((a,b)=> a.price - b.price);
console.log(sortCars);
*/
/*
const cars = [
  { mark: "Mersedes", model: "s600", year: "2002", price: 15000 },
  { mark: "BMW", model: "Q3", year: "2006", price: 81006 },
  { mark: "AUDI", model: "s600", year: "2000", price: 10000 },
  { mark: "TOYOTA", model: "s600", year: "1999", price: 16000 },
  { mark: "LEXUS", model: "s600", year: "1969", price: 11000 },
];


const arrOfModel = cars.map((item)=> [item.mark, item.model]);
console.log(arrOfModel);
const arrOfModel2 = cars.map(({mark,model})=> [mark,model]);
console.log(arrOfModel2);


const arrRest = cars.map(({mark,model,...rest})=>rest)
console.log(arrRest);

const arrRest2 = cars.map(({mark,model,...rest})=>{
  return{
    markModel: `${mark} ${model}`,
    ...rest
  }
})
console.log(arrRest2);


const arrRest3 = cars.map(({mark,model,price,year})=>{
  return{
    markModel: `${mark} ${model}`,
    price,
    year
  }
})
console.log(arrRest3);

const avgPriceCars = cars.reduce((prev,{price})=>prev+ price,0)/cars.length
console.log(avgPriceCars)
console.log(Math.round(avgPriceCars));


const arrOfCars  = cars.filter((item)=>item.year>2002);
console.log(arrOfCars);
const arrOfCars2 = cars.filter(({year})=>year>2002);
console.log(arrOfCars2);

//Date
const date = new Date().getFullYear();
console.log(date);

const arrOfCars3 = cars.filter(({year})=>date-year<20);
console.log(arrOfCars3);

const users = [
  { name : "Arsen", bDay : "03/03/1998"},
  { name : "Ivan", bDay : "10/25/1990" },
  { name : "Alex", bDay : "07/05/1995" },
  { name : "Kostya", bDay : "02/12/2005" },
  { name : "Max", bDay : "05/07/2001" },
  { name : "Ann", bDay : "01/15/2002" },
  { name : "Julia", bDay : "09/13/2003" },
  { name : "Oksana", bDay : "10/25/2001" },
];


const arrUsers = users.filter(({bDay})=> {
  return date - new Date(bDay).getFullYear()>20
});
console.log(arrUsers);


const arrUsers2 = users.filter(({bDay})=> {
  return new Date().getFullYear() - new Date(bDay).getFullYear()>20
});
console.log(arrUsers2);


const newArr = cars.sort((a,b)=>a.price - b.price)
console.log(newArr);
*/
const customers = [
  {
    id: 1,
    firstName: "Ivan",
    lastName: "Alekseev",
  },
  {
    id: 2,
    firstName: "Arsen",
    lastName: "Iusupov",
  },
  {
    id: 3,
    firstName: "Sam",
    lastName: "Tyler",
  },
  {
    id: 4,
    firstName: "Jack",
    lastName: "Rocky",
  },
  {
    id: 5,
    firstName: "Kendrick",
    lastName: "Lamaar",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Lennon",
  },
  {
    id: 7,
    firstName: "Paul",
    lastName: "McCartney",
  },
];

const orders = [
  {
    id: 1,
    customerId: 3,
    date: "02/03/2022",
    delivered: true,
    products: [
      { productId: 567, price: 2000 },
      { productId: 789, price: 3000 },
    ],
  },
  {
    id: 2,
    customerId: 5,
    date: "05/08/2022",
    delivered: false,
    products: [
      { productId: 413, price: 2500 },
      { productId: 124, price: 1000 },
    ],
  },
  {
    id: 3,
    customerId: 1,
    date: "05/12/2021",
    delivered: true,
    products: [
      { productId: 500, price: 1500 },
      { productId: 213, price: 1500 },
    ],
  },
  {
    id: 4,
    customerId: 6,
    date: "10/07/2022",
    delivered: true,
    products: [
      { productId: 531, price: 1000 },
      { productId: 231, price: 2500 },
    ],
  },
  {
    id: 5,
    customerId: 6,
    date: "10/08/2022",
    delivered: false,
    products: [
      { productId: 912, price: 5000 },
      { productId: 942, price: 500 },
    ],
  },
  {
    id: 6,
    customerId: 2,
    date: "10/08/2022",
    delivered: true,
    products: [
      { productId: 545, price: 2300 },
      { productId: 942, price: 800 },
    ],
  },
  {
    id: 7,
    customerId: 7,
    date: "05/09/2022",
    delivered: true,
    products: [
      { productId: 600, price: 2000 },
      { productId: 849, price: 900 },
    ],
  },
  {
    id: 8,
    customerId: 4,
    date: "10/10/2022",
    delivered: true,
    products: [
      { productId: 575, price: 2400 },
      { productId: 248, price: 850 },
    ],
  },
];

const findProducts = (nameCustomer, lastNameCustomer) => {
  const currentCustomer = customers.find(
    (customer) =>
      customer.firstName == nameCustomer &&
      customer.lastName == lastNameCustomer
  ).id;

  return orders.find((order) => order.customerId == currentCustomer).products;
};

console.log(findProducts("Sam", "Tyler"));

// Добавить к каждому объекту заказов(orders) свойства firstName и lastName пользователя и вернуть новый массив
// , котрый сделал заказ.
// В новом массиве будут объекты с заказами, в которых будет указаны имя и фамилия пользователя,
// который сделал заказ

let arr = orders.map((item) => {
  let a = customers.find(({ id, firstName, lastName }) => {
    id == item.id;
    return { firstName, lastName };
  });
  return {
    ...item,
    firstName: a.firstName,
    lastName: a.lastName,
  };
});
console.log(arr);
// Вместе.У всех ли заказов, сумма заказанных товаров больше чем 2000. Если больше 2000 - true, если меньше false
// Задача. Вернуть массив заказов, сумма заказанных продуктов которых больше чем 2000.
// Если сумма заказанных продуктов больше 2000, то возвращаем объект в новый массив

let resArray = orders.filter((item) => {
  return item.products.reduce((prev, current) => prev + current.price,0)>2000;
});

console.log(resArray);


//const isMore = orders.every(orders=>products.reduce((sum,curent)=>sum+curent.price,0)>2000)


let res1 = orders.some(({customerId})=>customerId=4);
console.log(res1)

function searchCustomer(customersId){
  return orders.some(({customerId})=>customerId=customersId);
}

console.log(searchCustomer(3));

// ДЗ. Написать функцию, которая принимает имя и фамилию пользователя и возвращает 
// true, если пользователь с таким именем делал заказ
// false, если пользователь с таким именем ничего не заказывал
// ДЗ. Вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь
// Написать функцию, которая принимает имя и фамилию и возвращает массив продуктов, 
// которые заказал этот пользователь. У одного пользователя может быть несколько заказов.
// Итоговый массив должен быть одномерным. То есть должен содержать только объекты продуктов. 

// ДЗ. Написать функцию, которая возрващает массив пользователей, которые ничего не заказали.






















