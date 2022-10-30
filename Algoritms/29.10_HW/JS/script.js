//First level: 1. Linear Search
//Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .

array = [1, 2, 3, 4, 5, 6, 7, 8];
function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (x == element) {
      return `${i}  index of search element`;
    }
  }
  return -1;
}
console.log(searchElement(array, 12));
console.log(searchElement(array, 1));

//Find the element that appears once in a sorted array
//Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.
arr = [1, 1, 2, 2, 3, 4, 4];
arr1 = [1, 1, 2, 2, 4, 4];
function searchElementWithoutDublicate(array) {
  for (let i = 0; i < array.length; i = i + 2) {
    if (array[i] !== array[i + 1]) {
      return `Element Without Dublicate  ${array[i]} index ${i}`;
    }
  }
  return -1;
}
console.log(searchElementWithoutDublicate(arr));
console.log(searchElementWithoutDublicate(arr1));


function searchElementWithoutDublicateAndFormatArr(array) {
  let formatArray = array.slice();
  for (let i = 0; i < array.length; i = i + 2) {
    if (array[i] !== array[i + 1]) {
      formatArray.splice(i + 1, 0, array[i]);
      return formatArray;
    }
  }
  return -1;
}
console.log(searchElementWithoutDublicateAndFormatArr(arr));
