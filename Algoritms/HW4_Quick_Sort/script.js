function quickSort(array, leftIndex, rightIndex) {
  let i = leftIndex;
  let j = rightIndex;
  let pivot = array[Math.floor((leftIndex + rightIndex) / 2)];
  while (i <= j) {
    while (array[i] < pivot) i++;
    while (array[j] > pivot) j--;
    if (i <= j) {
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
      i++;
      j--;
    }
  }
  if (leftIndex < j) quickSort(array, leftIndex, j);
  if (i < rightIndex) quickSort(array, i, rightIndex);

  return array;
}

let arr1 = [2, 5, 8, -3, 6, 1];
console.log(quickSort(arr1, 0, arr1.length - 1));
