//3. Напишите цикл for, который выводит числа в консоль от 0 до 10.
/*
for(i = 0; i <= 10; i++){
    console.log(i)}
 /* 
  //4. Напишите цикл for, который выводит числа в консоль от 0 до 10 c шагом 2.
  for(i = 0; i <= 10; i=i+2){
    console.log(i)}
  
  //5. Напишите цикл for, который выводит числа в консоль от 5 до 10.
  for(i = 5; i <= 10; i++){
    console.log(i)}
  
  //6. Напишите цикл for, который выводит числа в консоль от 10 до 0.
  for(i = 10; i >= 0; i--){
    console.log(i)}
  
  //7. В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего,
  let n = 2;
  let m = 5;
  
  if(n>m){
  for(i = n; i >= m; i--){
  console.log(i)}
  }else{
    for(i = m; i >= n; i--){
  console.log(i)}
  }
  
  
  //8. В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n. 
  let n=10;
  let m = 2;
  for(i = n; i >= m; i--){
  if (i%2===0){
    console.log(i)}}
  
  
  //9. В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который считает 
  //сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). 
  let n=-10;
  let m = 10;
  let sum1 = 0
  let sum2 = 0
  
  for(i = n; i <= m; i++){
  
  if (i%2===0){
    sum1 += i}
  
  if (i%2!==0){
    sum2 += i}
  }
  console.log(sum1)
  console.log(sum2)
  
  
  //10. В программе задана переменная n. Напишите программу, которая с помощью цикла считает сумму чисел от 1 до n и выводит в консоль.
  let n=5;
  let sum1 = 0
  
  
  for(i = 1; i <= n; i++){
    sum1 += i}
  console.log(sum1)
  
  //11. Напишите функцию power, которая в качестве аргумента n принимает число и возвращает квадрат этого числа.
  function power(n){
    return n*n;
  }
  console.log(power(7))
  
  //12. Напишите функцию, power, которая принимает два аргумента (основание стемени и саму степень) и возвращает
  // число в указанной степени. Значение степени должно быть указано по умолчанию 2.
  
  function power(n,m=2){
    return n**m;
  }
  console.log(power(7,2))
  console.log(power(7))
  console.log(power(12,3))
  
  //13. Напишите функцию, max_number, которая принимает два аргумента с числовым значением и возвращает большее значение.
  
  function max_number(num1,num2){
  if(num1>num2){
  return num1}
  else{
  return num2}}
  
  //14. Напишите функцию, range, которая принимает два аргумента (n и m) с числовым значением и возвращает массив с числами от n до m -1.
  
  let arr = [];
function range(num1,num2){
    for(let i=num1; i<=num2-1; i++){
     arr.push(i);
  }
}
  range(2,7)
console.log(arr)
  
  //15. Напишите функцию, num_count, которая в качестве аргумента принимает целое число и возвращает количество цифр в этом числе.
  let num;
  function num_count (num){
  let numStr = String(num)
  return numStr.length}
  
  //16. Напишите функцию, get_hypotenuse, которая в качестве аргумента принимает два числа (длины катетов) и возвращает гипотенузу.
  let katet1
  let katet2
  function get_hypotenuse(katet1,katet2){
    let hipotenuse = (katet1*katet1 + katet2*katet2)**(1/2)
    return hipotenuse;
  }
  console.log(get_hypotenuse(3,4))
  console.log(get_hypotenuse(1,0))
  console.log(get_hypotenuse(5,12))
  console.log(get_hypotenuse(15,20))
  
  
  