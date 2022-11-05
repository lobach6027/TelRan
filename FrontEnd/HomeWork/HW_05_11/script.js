console.log("Напишите функцию, которая поверхностно сравнивает два объекта");
const data = { a: 1, b: 1, c: 1, d: 1 };
const data2 = { a: 1, b: 1, c: 1 };

function isEqual(obj1, obj2) {
  let arrOfKeysAndValueObj1 = Object.entries(obj1);
  let arrOfKeysAndValueObj2 = Object.entries(obj2);

  let strObj1 = arrOfKeysAndValueObj1.join(",");
  let strObj2 = arrOfKeysAndValueObj2.join(",");

  let arrObj1 = strObj1.split(",");
  let arrObj2 = strObj2.split(",");
  let matchingValues = [];
  if (arrObj1.length === arrObj2.length) {
    for (let i = 0; i < arrObj1.length; i = i + 2) {
      for (let j = 0; j < arrObj2.length; j = j + 2) {
        if (arrObj1[i] == arrObj2[j] && arrObj1[i + 1] == arrObj2[j + 1]) {
          matchingValues.push(arrObj1[i], arrObj1[i + 1]);
        }
      }
    }
    if (matchingValues.length === arrObj1.length) {
      return `objects are equal`;
    } else {
      return `objects are unequal`;
    }
  } else return `objects are unequal, different numbers of  keys and values`;
}
console.log(isEqual(data, data2));

console.log(
  "Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений."
);

function searchSame(obj1, obj2) {
  let arrOfKeysAndValueObj1 = Object.entries(obj1);
  let arrOfKeysAndValueObj2 = Object.entries(obj2);

  let a = arrOfKeysAndValueObj1.join(",");
  let b = arrOfKeysAndValueObj2.join(",");

  let m = a.split(",");
  let n = b.split(",");

  let arrOfSameElements = [];
  for (let i = 0; i < m.length; i = i + 2) {
    for (let j = 0; j < n.length; j = j + 2) {
      if (m[i] == n[j] && m[i + 1] == n[j + 1]) {
        arrOfSameElements.push(m[i]);
        arrOfSameElements.push(m[i + 1]);
      }
    }
  }
  let myarr = [];
  for (let i = 0; i < arrOfSameElements.length; i += 2) {
    if (
      arrOfSameElements[i] != undefined &&
      arrOfSameElements[i + 1] != undefined
    ) {
      myarr.push([arrOfSameElements[i], arrOfSameElements[i + 1]]);
    }
  }

  const obj = Object.fromEntries(myarr);

  return obj;
}
console.log(searchSame(data, data2));
