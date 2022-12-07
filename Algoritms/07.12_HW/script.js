let array = [
  1, 5, 9, 4, 6, 7, 0, 31, 24, 5, 8, 6, 9, 21, 54, 54, 78, 65, 45, 75, 1, 5, 9,
  4, 6, 7, 0, 31, 24, 5, 8, 6, 9, 21, 54, 54, 78, 65, 45, 75, 1, 5, 9, 4, 6, 7,
  0, 31, 24, 5, 8, 6, 9, 21, 54, 54, 78, 65, 45, 75, 22, 3, 245, 54, 12, 3, 0,
  64,
];
let start = Date.now();
console.log(start);
function bubleSort(array) {
  let count = 0;
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
        count = count + 1;
        const tmpElem = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmpElem;
      }
    }
  }
  console.log(array, `количествo итераций: ${count}`);
}
bubleSort(array);
let finish = Date.now();
console.log(finish);
console.log(`buble Sort производительность: ${finish - start}`);

let start1 = Date.now();

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const less = [];
  const greater = [];
  let count = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      count = count + 1;
      less.push(array[i]);
    } else {
      greater.push(array[i]);
      count = count + 1;
    }
  }
  console.log(`количество итераций ${count}`);
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort(array));
let finish1 = Date.now();
console.log(finish1);
console.log(`quick Sort производительность: ${finish1 - start1}`);
