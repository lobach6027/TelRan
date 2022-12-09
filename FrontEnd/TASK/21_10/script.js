/*let userName = prompt("What is your name?");
console.log(userName);
alert("Hello  "+userName);*/

/*let name = prompt ("What is your name?")
let upName = name[0].toUpperCase + name.slice(1);
alert (upName)*/
/*
let arr = ["Ivan", "Stepan", "Mark"];
let newName = prompt("What is name you want to add?");

function checkName(){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase()==newName.toLowerCase()){
            return alert("We have this name in array") 
        }    
    }
   arr.push(newName)
}
console.log(arr);
checkName()

//let nums = [2, 4, 6, 8] // Добавить в массив 10
//let newArr = nums.concat(10) 
//console.log(nums)
//console.log(newArr)

function checkNameIncludes(name){
    if(arr.includes(name)){
        return alert("We have this name in array")
    }
    arr.push(name)
}*/
/*
let arr = [2, 4, 6, 8, 6];
let del = arr.splice(1,3,"2","3","4")

console.log(arr)


let message =  ["Hello","I","am","Oksana"]
let newMess = message.splice(3,1,"Anna")
let str = message.join(" ")
console.log(str)*/


let message =  ["Hello","I","am","Oksana"]
let index = +prompt (`What word of the ${message.length}  you want delete?`+ message.join(" "))
if(typeof index === "number" && index>0 && index<=message.length){

    let addStr = prompt("what word do you want to add?")
    message.splice(index-1,1,addStr);
    console.log(message.join(" "));

}else{console.log(`Please, enter the number of the word you want to delete in sentence, number from 1 to ${message.length}`)}
