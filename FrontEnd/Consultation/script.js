/*let list = document.querySelector(".tabs ul");
const listElements = document.querySelectorAll(".tabs ul li");
const infos = document.querySelectorAll(".info");

console.log(listElements);

listElements.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.dataset.index);
  });
});
let myButton = document.querySelector('.myBtn1');
let myInput = document.querySelector('#input');

myButton.addEventListener('click',changeText);

function changeText(event){
    myInput.value = 'thanks'
    myButton.removeEventListener('click',changeText)
}*/

let firstButton = document.querySelector('.actionButton');
let secondButton = document.querySelector('.takeButton');
let input = document.querySelector('#input');

firstButton.addEventListener('click',moveText);

function moveText(event){
    if(!input.value){
secondButton.textContent = 'write something'
    }else{
        secondButton.textContent = input.value;
        input.value = '';
    }
   

}

let squareButton = document.querySelector('.square');
let squareInput = document.querySelector('#input2');

squareButton.addEventListener('click',toSquare);

let square = num => num*num;

function toSquare (event){
    if(isNaN(Number(squareInput.value))){
        squareInput.value = 'please, enter number'
    }else{
        squareInput.value = square(Number(squareInput.value))
    }
   
}


let greenButton = document.querySelector('.greenButton');
let redButton = document.querySelector('.redButton');
let box = document.querySelector('.box');

greenButton.addEventListener('click', changeToGreen)
redButton.addEventListener('click', changeToRed)

function changeToGreen(event){
   
    box.className = 'greenStyle'
    //greenButton.removeEventListener('click', changeToGreen)
}

function changeToRed(event){

    box.className = 'redStyle'
    //box.classList.add('redStyle');
   // redButton.removeEventListener('click', changeToRed)
}

let arr = ['a', 'b','c']
arr.pop();
console.log(arr)
arr.push('f')
console.log(arr)
let l = arr.push('n')
console.log(l)
arr.shift();
console.log(arr);

let array = ['a','7','h']
function sumNum (arr){
    let acum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(typeof element == 'number'){
            acum = acum +element;
        }
        
    }
    if(acum){
        return acum;
    }else{return -1}
    return acum;
}
console.log(sumNum(array))

let arr1 = [1,5,6]
let arr2 = [1,5,8]
let arr3 = arr1.concat(arr,arr2)
console.log(arr3)

function abc(arr){
for (let i = 0; i < arr.length; i++) {
    console.log(i)
    
}
}
console.log(abc(arr1))

arr.forEach((item,index)=>{
    console.log(index)
}
)
let a = [1,3]
let myArray = [['oksana','sofiia','anna'],['sofiia','anna'],['oksana','sofiia']];
console.log(myArray.includes('anna',[0]));
let k = myArray.concat(a);
console.log(myArray.concat(a))

let result = myArray.find(item=>item[0]=='oksana')
console.log(result);

let myFamily = ['oksana','sofiia','anna']


let mapArr = myFamily.map((item)=>{
     return item +' lobach'
})
console.log(mapArr)

let p = 'a hjk hjkl '
let arr4 = p.split('-')
console.log(arr4);

console.log(document)



//console.log(document.body.children)
//console.log(document.body.style)
//document.body.style.backgroundColor = "red";
console.log(document.body.style)
// document.body.style.background = "red";
//document.body.style.cssText = 'color: red; font-size: 40px;';

let informs = document.querySelector('.informs');

informs.onclick = function(event) {
     	//console.log(this)
     	console.log(event.target)
};
let link= document.querySelector('.link')
console.log(link.textContent);
let atr =  link.getAttribute('href');
console.log(atr);

console.log(informs.innerHTML);
console.log(informs.outerHTML);
//informs.innerHTML='<li data-index="1">Item 1</li>'
console.log(informs);
informs.outerHTML='<li data-index="1">Item 1</li>'