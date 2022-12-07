function hanoi(quantityOfDiscs, startPole, helpPole, finishPole) {
  if (quantityOfDiscs <= 0) {
    return false;
  } else {
    hanoi(quantityOfDiscs - 1, startPole, finishPole, helpPole);
    console.log(`${startPole} => ${helpPole}`);

    hanoi(quantityOfDiscs - 1, finishPole, helpPole, startPole);
  }
  return;
}

console.log(hanoi(3, 1, 3, 2));
//console.log(hanoi(4, 1, 3, 2));
//console.log(hanoi(5, 1, 3, 2));
//console.log(hanoi(6, 1, 3, 2));


/*
function solve1(n, fromRod,toRod, additionalRod){
  if(n===1){
    return ` move 1 disk from ${fromRod} to ${toRod}`;
  }else{
    solve(n - 1, fromRod,additionalRod,toRod);
    console.log(` move disk ${n} from ${fromRod} to ${toRod}`);
    solve(n - 1,  additionalRod,toRod, fromRod);
  }
 return;
  }

console.log(solve1(3,1,3,2))*/
// Get max element in array
// найти максимальный элемент в заданном массиве. 
// Ввод: {40, 250, 80, 88, 240, 12, 148}
// Вывод: 
// Mинимальное число в данном массиве: 12
// Максимальное число в данном массиве: 250

let arr = [40, 250, 80, 88, 240, 12, 148];

findMinDefault(arr);

function findMinDefault(arr) {
  var min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      }
  }

  return min;
}

function findMaxDefault(arr) {
  var max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }

  return max;
}





function findMin(arr, index) {
  let min;

  if (arr.length > index) {
      min = findMin(arr, index + 1);

      if (arr[index] < min) {
          return arr[index];
      }
      return min;
  }

  return arr[index - 1];
}

function findMax(arr, index) {
  let max;

  if (arr.length > index) {
      max = findMax(arr, index + 1);

      if (arr[index] > max) {
          return arr[index];
      }
      return max;
  }

  return arr[index - 1];
}












