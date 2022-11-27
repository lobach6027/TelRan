//Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'

//let arr = ['a', 'b', 'c', 'd']

//let concan = `${arr[0]}+${arr[1]},${arr[2]}+${arr[3]}`

//let con = ""+arr[0]+"+arr[1]+","+arr[2]+"+"+arr[3]
/*
let even = (num) => num%2==0;
let multi = (num) => num%3==0;

let arrToStringConCat = arr =>{
    let str = "";
for (let i = 0; i < arr.length; i++) {
   // str = str +arr[i]
   if(even(i+1)){
    str += `, ${arr[i]}`
    console.log(arr[i])
}else{
    str += arr[i]   
}

}


    return str;
}
console.log(arrToStringConCat(['a', 'b', 'c', 'd', 'e', 'f','g','i','f']))
*/
//// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент
//массива на второй, а третий элемент на четвертый. 
// Результаты сложите, присвойте переменной result.
// Выведите на экран значение этой переменной.
/*
let arr = [2, 5, 3, 9];

 let res = (arr[0]*arr[1])+(arr[2]*arr[3])
 console.log(res)


 let arrToCalc = arr =>{
    let acum  = 0;
    let arr1 = [];
    let arrToMult = [];
    for (let i = 0; i < arr.length; i++) {
        if (i%2!==0){
            arr1.push([arr[i-1],arr[i]])
        }        
    }
    console.log(arr1)
    
for (let i = 0; i < arr1.length; i++) {
   arrToMult.push(arr1[i][0]*arr1[i][1])    
}
console.log(arrToMult)

for (let i = 0; i < arrToMult.length; i++) {
   acum+=arrToMult[i]
    
}
return acum;

 }

//[[2,5],[3,9]]
arrToCalc([2, 5, 3, 9])

console.log(arrToCalc([2, 5, 3, 9, 2, 3]))*/

//В переменной date лежит дата в формате '2025-12-31'. 
//Преобразуйте эту дату в формат '31/12/2025'.
/*
let strDate = '2025-12-31'

let strDateArr = strDate.split("-");
strDateArr.reverse();
console.log(strDateArr)
let stringUpDate = strDateArr.join("/")
//let stringDate = ` ${strDateArr[2]}/${strDateArr[1]}/${strDateArr[0]}`

console.log(stringUpDate)

function fotmatDate(text){
    let srtArray = text.split("-")
    srtArray.reverse();
    let newText = srtArray.join("/")
    return newText;

}
console.log(fotmatDate("2022-10-19"))
*/
/*
function format(some,datail){
   let revArrDate = some.split("-").reverse().join("/");
   let newArrDate = [];
   for (let i = 0; i < newArrDate.length; i++) {
   if(datail[i]){
    newArrDate.push(da)
   }
    
   }

}
console.log(format("2023-12-13",['31', false,false]))

///  Дана переменная str, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему принципу: 
//если количество символов этого текста больше заданного 
//в переменной n, 
// то в переменную result запишем первые n символов строки str 
//и добавим в конец троеточие '...'. 
// В противном случае в переменную result запишем содержимое 
//переменной str.

let shortingStr = function(text, max){
if(text.length<=max){

    return text;
}
return text.slice(0,max)+ '...'

}
console.log(shortingStr('fghkhjl hgdjslhgdl gdhslhdsl dshjlfls',25))

function formatDateAndChangeData(string, detailForUpd) {
    let reversedArrayDate = string.split("-").reverse();
  
    let newArrayDate = [];
  
    for (let i = 0; i < reversedArrayDate.length; i++) {   
      if (detailForUpd[i]) {
        newArrayDate.push(detailForUpd[i]);
      } else {
        newArrayDate.push(reversedArrayDate[i]);
      }
      
    }
  
    return newArrayDate.join('/');
  }
  
  console.log(formatDateAndChangeData("2012-10-21", [false, 08, false]));
  console.log(formatDateAndChangeData("2012-10-21", [false, false, 2013]));
  console.log(formatDateAndChangeData("2012-10-21", [11, 11, 2013]));
  */




  