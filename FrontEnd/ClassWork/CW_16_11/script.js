/*
const numbers = [12,4,3,2,43]
let resalt = numbers.filter(elem=>elem%2===0);
console.log(resalt)
*/
/*
const numbers = [12,4,3,2,43]
const resalt = numbers.reduce((prev,item)=>prev+item)
console.log(resalt);

const resalt1 = numbers.reduce((prev,item)=>prev*item)
console.log(resalt1);

const numbers2 = [1,2,3,4,5]
const resalt3 = numbers2.reduce((prev,item)=>prev*item)
console.log(resalt3);


const res = numbers.filter(item=>item%2===0).reduce((prev,item)=>prev+item)
console.log(res)


const res2 = numbers.reduce((prev,item)=>prev+((item%2===0)?item:0),0);
console.log(res2)

const res4 = numbers.reduce((prev,item)=>prev>item?prev:item)
console.log(res4)
*/
/*
const numbers2 = [1,2,3,4,5]
function reduce(array,callback,initial){
    let lastCall=initial;
    for (let i = 0; i < array.length; i++) {
      lastCall = callback(lastCall,array[i])
        
    }
    return lastCall;
}
const res= reduce(numbers2,(prev,item)=>prev>item?prev:item,0)
console.log(res)
*/

/*
const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000
    },
    {
        id: 3,
        title: 'самокат',
        price: 15000
    },
    {
        id: 4,
        title: 'сноуборд',
        price: 27000
    },
    {
        id: 5,
        title: 'лыжи',
        price: 30000
    }
];*/
/*
const goods = products.map(item=>item.title)
console.log(goods);
*/

/*const titles = products.map(item =>{
    const{title}=item;
    //const title = item.title
    return title
});
console.log(titles)*/
/*
const titles = products.map(({title}) =>title);
console.log(titles)


const titlePrise = products.map(({title,price}) =>`${title}-${price}`);
console.log(titlePrise)

const goods1 = products.filter(({price})=>price<26000);
console.log(goods1);

const goods2 = products.reduce((prev,product) => prev + product.price,0)

console.log(goods2);
const goods3 = products.reduce((prev,product) => prev + product.price,0)
console.log(goods3);

const product = products.reduce((prev,product) => prev.price>product.price?prev:product)
console.log(product)
*/
/*
const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        marks: [4, 3, 5, 3]
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        marks: [4, 3, 5, 5]
    },
    {
        id: 3,
        title: 'самокат',
        price: 15000,
        marks: [3, 5, 3]
    },
    {
        id: 4,
        title: 'сноуборд',
        price: 270000,
        marks: [4, 3, 5]
    },
    {
        id: 5,
        title: 'лыжи',
        price: 30000,
        marks: [4]
    }
];
*/
/*
const result = products.map(({id, title,price,marks})=>({
    id,title,price,
    avg_mark: marks.reduce((a,b)=>a+b)/marks.length
}))
console.log(result)

const result2 = products.map(({marks, ...product})=>({
    ...product,
    avg_mark: marks.reduce((a,b)=>a+b)/marks.length
}))
console.log(result2)
*/
const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        count: 3,
        marks: [4, 3, 5, 3]
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        count: 5,
        marks: [4, 3, 5, 5]
    },
    {
        id: 3,
        title: 'самокат',
        price: 15000,
        count: 2,
        marks: [3, 5, 3]
    },
    {
        id: 4,
        title: 'сноуборд',
        price: 270000,
        count: 0,
        marks: [4, 3, 5]
    },
    {
        id: 5,
        title: 'лыжи',
        price: 30000,
        count: 1,
        marks: [4]
    }
];

let res = products.reduce((prev,{price,count})=> prev+price*count,0)
console.log(res)

const a = products.reduce((prev,{marks})=>prev+(marks.reduce((sum,item)=>sum+item)),0)
console.log(a)




























