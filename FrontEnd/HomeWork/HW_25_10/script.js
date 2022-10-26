console.log("First level: 1. Фильтрация по диапазону Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива. Функция должна возвращать новый массив и не изменять исходный.")


let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){

    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element >=a && element<=b)
filteredArr.push(element);
    }
    return filteredArr;
}
console.log(filterRange(arr,1,4));
console.log(arr);

//Пыталась сделать через фильтр, но не знаю как вписать границы диапазона
/*let result =arr.filter(function(item){
return (item>=1 && item<=4)
});
console.log(result);*/


console.log("Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.Функция должна изменять принимаемый массив и ничего не возвращать.")
/*
function filterRange(arr, a, b){
 for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element<a|| element>b)
arr.splice(i,1)
    }
    console.log(arr)
}
console.log(filterRange(arr,1,4))*/
