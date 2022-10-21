//думаю, есть решение проще, но вообщем не хватает опыта переложить мысли в более эффективный код)) 

//Напишите следующую функцию, которая принимает некий массив данных.

//если в массиве только строковый тип данных, то функция должна находить
//самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве

//если в массиве только цифры, то функция должна находить самую большую цифру и возвращать
// массив из двух элементов - из этой цифры и её индекса в исходном массиве

//во всех остальных случаях (если там другие типы данных или же они смешаны), то функция
//должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве',
//а второй элемент это общая длина массива.

/*
//let arr = ["a", "av", "sdgh", "g"];
//let arr = [2,3,5,8,24]
let arr = ["a",2,"ghjk","254"]

function isAllString(data) {
  let stringCount = 0;
  for (let i = 0; i <= data.length; i++) {
    if (typeof data[i] === "string") stringCount++;
  }
  return stringCount == data.length;
}
let resStr = isAllString(arr);

function isAllNum(data) {
  var stringCount = 0;
  for (let i = 0; i <= data.length; i++) {
    if (typeof data[i] === "number") stringCount++;
  }
  return stringCount == data.length;
}
let resNum = isAllNum(arr);

function checkArray(arr) {
  if (resStr == true) {
    let longestWord;
    for (let i = 0; i < arr.length; i++) {
      let lengthWord = arr[1].length;

      if (arr[i].length > lengthWord) {
        longestWord = arr[i];
      }
    }
    return [longestWord, longestWord.length];
  } else if (resNum == true) {
    let bigestNum;
    for (let i = 0; i < arr.length; i++) {
      bigestNum = arr[1];

      if (arr[i] > bigestNum) {
        bigestNum = arr[i];
      }
    }
    return [bigestNum, arr.indexOf(bigestNum)];
  } else {
    console.log([arr.length, "неверный тип данных в массиве"]);
  }
}
console.log(checkArray(arr))

*/

//(Необязательная задача) Напишите функцию которая будет принимать три массива
 //с любыми данными и объединять их в один, новый массив и возвращать его.
  //В зависимости от типа данных вы должны упорядочить данные. Сначала добавляйте 
  //только строки, затем цифры, затем булевы значения, все 
//остальные значения могут быть в произвольном порядке добавлены далее.

let arr1 = [2, false, 5, true, 24];
let arr2 = [2, "b", 5, "f", 24];
let arr3 = [2, "ghj", 5, "h", false,[]];

function mergeArrays(arr1, arr2, arr3) {
  let unionArray = [].concat(arr1, arr2, arr3);
  let sortArrayStr = [];
  let sortArrayNum = [];
  let sortArrayBoolean = [];
  let sortArrayAnother = [];
  
  for (let i = 0; i < unionArray.length; i++) {
    const element = unionArray[i];
    if (typeof element === "string") {
      sortArrayStr.push(element);
    } else if (typeof element === "number") {
      sortArrayNum.push(element);
    } else if (typeof element === "bolean") {
      sortArrayBoolean.push(element);
    } else {
      sortArrayAnother.push(element);
    }
  }
let sortUnionArray = [].concat(sortArrayStr,sortArrayNum,sortArrayBoolean,sortArrayAnother)
  return sortUnionArray;
}
console.log(mergeArrays(arr1, arr2, arr3));