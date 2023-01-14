function sum(int) {
  if (int == 1) {
    return int;
  } else {
    return int + sum(int - 1);
  }
}

console.log(sum(10));

let arr = [1, 2, 3, 6];
console.log(arr[1]);

function multi(arr) {
  if (arr.length === 1) {
    let sum = arr.shift();
    return sum;
  } else {
    return arr.shift() * multi(arr);
  }
}
console.log(multi(arr));


