//callback 
/*function showInConsole(callback,number) {
const mathResult = callback(number);
    console.log(mathResult);
}
function squer(numberSquer){
return number*number
}
showInConsole(squer,10)

function calc(number){
    let result = squer(squer(number))
    return result
}
calc()*/

/*function typeDetector(value)
if(typeof value === 'string'){
    return value.length;
}
*/
/*let arr = [ 
	'Яблоко', // 0 - строка
	[
		'лошадь', 
		'собака', 
		[
			123, 
			567,
		]
	], // 1 - массив
	true, // 2 - булева истина
	function() { // 3 - функция
		return 'А это функция';
	}
];
// получить элемент с индексом 3 (функция) и выполнить её
console.log(arr[1][2][1]);
console.log(arr[3]());*/


/*let  fruits = [
    'apple', 
    'orange', 
    'plum'
]
let shoppingCard = fruits2;*/

/*
let sumArrNumb = function(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        let arrElement = arr[i];

        if(typeof Number(arrElement) ==='number'){
            sum += Number(arrElement)
            console.log(arrElement)
        }

    }
return sum;
}

let arr1 = [1, 2 , 6, 'kot']

//console.log(sumArrNumb(arr1))

//console.log(Number(arrElement) !=='number')
sumArrNumb(arr1)
*/
/*
let sumArrNumbers = function(arr){

    let acamulate = 0;
    let counter = 0;

    for(let i = 0; i < arr.length; i++){

        let arrElement = arr[i];

        if(!isNaN(Number(arrElement)) ){
            acamulate+= Number(arrElement) ;
            counter++;
        }
        
    }



    return [
        acamulate,
        arr.length,
        counter
    ];

}

let arr1 = [
    1,
    2,
    '3',
    'Vasia',
    3
]


console.log(sumArrNumbers(arr1));



*/// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
 // Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
 // Функция должна возвращать true или false.
/*
 function inArr(text, arr){
    for(let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element===text){
            return true;
        }
        
    }
    return false;
 }
 let arr1 = [
    'Vasya',
    1,
    true,
    '124'
 ]
console.log(inArr(true,arr1))
console.log(inArr('Vasya',arr1))
console.log(inArr('124',arr1))
console.log(inArr(1,arr1))*/

//Array

let myList = [
'bread',
'milk',
'cake',
'eggs',
'butter']

let myListLength = myList.length
console.log(myListLength);

let first = myList[0]
console.log(first);
let second = myList[3]
console.log(second);

console.log(first.toUpperCase());
console.log(myList[2].toUpperCase())

myList[2] = 'plums'
console.log(myList);
console.log(myList.length);

myList[6] = 'tomato';
console.log(myList);
console.log(myList.length);

const myListNew = myList.filter(Boolean)
console.log(myListNew)
myListNew[6] = 'bread'
console.log(myListNew)
const myUniqueList = [... new Set(myListNew)]
console.log(myUniqueList)

const myArr = [1,2,3,4,5,6]
myArr.forEach((item, index, myArr) => {
console.log(item,index);
});

console.log(myUniqueList)
myUniqueList.forEach((item,index) => 
console.log(index,item))

console.log(myListNew)
myListNew.forEach((item,index) => 
console.log('[' + index + ']' , item))

let newLengthList = myList.push('garlic')
console.log(newLengthList)
let newList = myList.pop('garlic')
console.log(newList)

const searchItem = myList('bread');
console.log(searchItem);

