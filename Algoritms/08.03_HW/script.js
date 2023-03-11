//Написать самостоятельно сортировку слиянием.
//Стереть все то, что написали во время классной работы и
// заново написать merge sort, опираясь на текстовое описание.
/*
const merge = (left, right) => {
  const temp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      temp.push(left.shift());
    } else {
      temp.push(right.shift());
    }
    //console.log([...temp, ...left, ...right])
    //console.log(temp)
    //console.log(left)
    //console.log(left)
  }
  return [...temp, ...left, ...right];
};
const sorting = (array) => {
  const middle = Math.floor(array.length / 2);

  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, middle);
  return merge(sorting(left), sorting(array));
};

const arr = [1, 5, 1, 9, 9, 4, 10, 1];
console.log(sorting(arr));*/
/*
console.log(
  "Счетчик инверсии для массива указывает, насколько далек (или близок) массив от сортировки. Если массив уже отсортирован, то счетчик инверсии равен 0, а если массив отсортирован в обратном порядке, то счетчик инверсии будет максимальным. "
);
const array = [8, 4, 2, 1];
const array1 = [3, 1, 2];
const array2 = [3, 4, 5, 6, 7, 8];
const array3 = [8, 7, 6, 5, 4, 3, 2, 1];

const serchInversion = (arr) => {
  let temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp.push([arr[i], arr[j]]);
      }
    }
  }
  return `Numbers of inversions: ${temp.length}`;
};

console.log(serchInversion(array2));
*/
let fruits = ["Яблоко", "Апельсин", "Груша"];

fruits.pop()

console.log(fruits)
const a = 10;
const b = '10';
console.log(a===b)
console.log(a==b)

let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
console.log( arr.slice(-2))
console.log(arr);

let arr2 = [1, 2];


console.log( arr2.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
console.log(arr2);