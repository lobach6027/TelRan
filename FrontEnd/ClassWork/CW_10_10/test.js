/*function myFunc (myObject){

    myObject.make = 'Toyota';
}

let myCar = {make: 'Honda',
model: 'Accord',
year: 1988
};
const myCarIsMake = myCar.make;
console.log (myCarIsMake)

myFunc(myCar);
const myCarAfterFunc = myCar.make;
console.log(myCarAfterFunc)*/

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(3));