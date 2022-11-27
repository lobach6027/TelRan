
/*function getPush(what, count){
    let arr = [];
    for(let i = 0; i<count; i++){
        arr.push(what)
    }
  return arr;   
}
console.log(getPush(5,5))*/

//let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12];


/*let rangeFilter = function(arr, min, max){
    let arrNew = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i]>min && arr[i]<max){
            arrNew.push(arr[i])
        }
    
    }
    return arrNew;
}
console.log(rangeFilter(arr, 10,50))*/

// Сделайте функцию howManyToTen, которая будет принимать массив с числами и возвращать 
// количество элементов массива которых нужно сложить, начиная с первого, чтобы 
//получить число
// больше десяти.
/*let arr = [15, 2, -3, 8, 7, 0, -5, 18, 12];
let howManyToTen = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        
        sum += arr[i];
        if (sum>10){
            return i+1;
        }
    }
    return 'сумма не больше 10'
}
console.log(howManyToTen(arr)); */
// Дан массив с числами. Создайте из него новый массив, где останутся лежать только 
//положительные числа. 
// Создайте для этого вспомогательную функцию isPositive(), которая 
//параметром будет принимать число и возвращать true, 
// если число положительное, и false - если отрицательное.
/*

let arr = [15, 2, -3, 8, 7, 0, -5, 18, 12];


// Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
// Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, 
// если число положительное, и false - если отрицательное.
let arr = [1,-11,3,-5,8,-6,8,-9,6];


let isPositive = number => number>-1;
// {
//     if(number<0){
//         return false;
//     }else{
//         return true
//     }
// }

let arr = [1,-11,3,-5,8,-6,8,-9,6];


let isPositive = number => number>-1;
// {
//     if(number<0){
//         return false;
//     }else{
//         return true
//     }
// }
/*
let arr = [1,-11,3,-5,8,-6,8,-9,6];


let isPositive = number => number>-1;
// {
//     if(number<0){
//         return false;
//     }else{
//         return true
//     }
// }

/*
let positiveFilter = arr =>{

    let positiveArr = [];


    for(let i= 0; i<arr.length;i++){
        if(isPositive(arr[i])){
            positiveArr.push(arr[i]);
        }
    }


    return positiveArr;

};*/

/*
console.log(positiveFilter(arr));

let arr = [1,-11,3,-5,8,-6,8,-9,6];


let isPositive = number => number>-1;
// {
//     if(number<0){*/
//         return false;
//     }else{
//         return true
//     }
// }

/*
let positiveFilter = arr =>{

    let positiveArr = [];


    for(let i= 0; i<arr.length;i++){
        if(isPositive(arr[i])){
            positiveArr.push(arr[i]);
        }
    }


    return positiveArr;

};


console.log(positiveFilter(arr));*/
let arr = [];
function range(num1,num2){
    for(let i=num1; i<=num2-1; i++){
     arr.push(i);
  }
}
  range(2,7)
console.log(arr)
