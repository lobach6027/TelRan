//  Даны два целых числа x и n, напишите функцию для вычисления x^n

function exponentiation(number, power) {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return number;
  } else {
    return number * exponentiation(number, power - 1);
  }
}

console.log(exponentiation(5, 7));
console.log(exponentiation(5, 0));
console.log(exponentiation(2, 1));

// Имея два отсортированных массива размера m и n соответственно, вам нужно найти элемент, который будет находиться на k-й позиции в конечном отсортированном массиве.
let arr1 = [100, 112, 256, 349, 770];
let arr2 = [72, 86, 113, 119, 265, 445, 892];
function searchElem(arr1, arr2, indexOfElem) {
  const newArrAfterSort = [];
  let i = 0;
  let j = 0;
  let arr1Help = [...arr1];
  let arr2Help = [...arr2];
  console.log(arr1Help);
  console.log(arr2Help);

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArrAfterSort.push(arr1[i]);
      arr1Help.splice(0, 1);
      i++;
    } else {
      newArrAfterSort.push(arr2[j]);
      arr2Help.splice(0, 1);
      j++;
    }
  }

  const arr = newArrAfterSort.concat(arr1Help, arr2Help);
  for (let k = 0; k < arr.length; k++) {
    if (k === indexOfElem) {
      return arr[k - 1];
    }
  }
}
console.log(searchElem(arr1, arr2, 7));

//Имея отсортированный массив arr[] и число x,
//напишите функцию, которая подсчитывает вхождения x в arr[].
//Ожидаемая временная сложность O(Log n)
arr3=[1, 1, 2, 2, 2, 2, 3]

function numberSearshElem(array, searchNum) {
  let arrOfSearchElem = [];
  for (let i = 0; i < (Math.round(array.length/2)); i++) {
    if (searchNum === array[i]) {
      arrOfSearchElem.push(array[i]);
    }
  }
  for (let j = (Math.round(array.length/2)); j < array.length; j++) {
    if (searchNum === array[j]) {
      arrOfSearchElem.push(array[j]);
    }
  }
  return arrOfSearchElem.length
}
console.log(numberSearshElem(arr3,2))