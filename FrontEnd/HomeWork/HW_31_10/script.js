
console.log(
    " Подсчёт количества свойств объекта. Напишите функцию count(obj), которая возвращает количество свойств объекта:"
  );
  
  let user1 = {
    name: "John",
    age: 30,
    position: "manager",
    salary: 12000,
  };
  
  let count = (obj) => {
    let quantity = 0;
    for (const key in obj) {
      quantity += 1;
    }
    return `quantity of object properties is ${quantity}`;
  };
  console.log(count(user1));
  




  
  console.log(
    "Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника."
  );
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  
  let topSalary = (obj) => {
    let maxSalary = 0;
    let topWorker = [];
    for (const key in obj) {
      if (obj[key] > maxSalary) {
        maxSalary = salaries[key];
        topWorker.splice(0, 1, key);
      }
    }
    return `The worker with highest salary is ${topWorker}`;
  };
  console.log(topSalary(salaries));
  