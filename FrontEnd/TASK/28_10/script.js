/*function sum(a,b){
    return a+b
}

sum(10,15);

function greting(name){
    return `Hello, ${name}`
}
greting("Oksana")

function fn(anotherFn){ //функция высшего порядка(high order function), по тому что она вызывает другую функцию (функция обратного вызова, callback)
    console.log("hello")
    console.log(anotherFn());
}
fn(()=> sum(20,25))*/

/*
function sum(a,b){
    return a+b
}

function min(a,b){
    return a-b
}

library(sum,10,15)

function add(num){
  return  num+2
}
console.log(add(10))


array = [1,2,3,4,5]
let result = array.map(item=>item+3)
console.log(result)

let arr = [2, 4, 6, 8];
 */
array = [1,2,3,4,5]
let addThree = (num) => (num += 3);
/*
let newArr = arr.map((item) => addThree(item));

console.log(newArr);*/



function myMap(array,callback){
let newArr=[];
for (let i = 0; i < array.length; i++) {

    newArr.push(callback(array[i],i))
    
}

    return newArr;
}

console.log(myMap(array, (num,index)=>index%2 ===0? num+3:num))
console.log(myMap(array,addThree))

array1 = ["ivan","andrey","arsen"]
array1.forEach(item => {
    console.log(`Hello, ${item}`)
})
console.log(array1)


let nums = ["a","b","c","d"];
function myForEach(array,callback){
    for (let i = 0; i < array.length; i++) {
    
        newArr.push(callback(array[i],i))
        
    }
    
        return newArr;
    }
