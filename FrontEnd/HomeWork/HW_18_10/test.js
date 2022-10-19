//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string»
//в «myShortString».
//После сегодняшних занятий появилось хоть немного, ну здравое решение))))
let str = "my-short-string";
let str1 = "list-style-image";
let str2 = "-webkit-transition";
function camelize(str) {
  const arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
      let leterBig = arr[i + 1].toUpperCase();
      arr.splice(i, 2, leterBig);
    }
  }
  let newStr = arr.join("");
  return newStr;
}
console.log(camelize(str));
console.log(camelize(str1));
console.log(camelize(str2));


// Задача: написать функцию, принимающую массив чисел
//и возвращающую сумму всех его положительных элементов и отрицательных 
//чисел отдельно в виде нового массива
let arr1 = [1, -2, 3, 4, -9, 6];

let someSume = function (arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element >= 0) {
      sum1 += element;
    }

    if (element < 0) {
      sum2 += element;
    }
  }

  console.log(sum1);
  console.log(sum2);
};
console.log(someSume(arr1));
