// 2) Изменение текста в инпуте
// Кнопка при нажатии на которую в инпуте меняется текст.

// Нажми на кнопку рядом 
// Нажал! Спасибо.
//// <button onclick="buttonClick()">Нажми на меня</button>
// <input type="text" id="input" value="Нажми на меня">
/*
let myButton = document.querySelector('.myButton');
let myInput = document.querySelector('#input');

myButton.addEventListener('click',changeText);

function changeText(event){
    myInput.value = 'Спасибо, что нажали!'
    myButton.removeEventListener('click',changeText)
    console.log(myButton)
}
*/
// 3) Вывод содержимого инпута
// Создайте input и две кнопки. 
// В инпут вводите текст, потом нажимайте на первую кнопку
// и во-вторую передавайте из содержимое input
/*
let actionButton = document.querySelector('.actionButton');
let input = document.querySelector('#input');
let takeButton = document.querySelector('.takeButton');

actionButton.addEventListener('click',trasferText);

function trasferText(event){
    if(!input.value){
        takeButton.textContent = 'fill input!'
    }else{
        takeButton.textContent = input.value;
        input.value = "";
    }
};*/
// 4) Создайте input и кнопку "возвести в квадрат"
// в input вводите число, а по нажатию на кнопку меняйте его на квадрат этого числа
// реализуйте это через вспомогательную функцию возведения в квадрат
// Number(input.value) и square(название для функции квадрат)

/*
let squareButton  = document.querySelector('.square');
let squareInput = document.querySelector('#input3')

squareButton.addEventListener('click',toSquare);


let square = num=>num*num;
function toSquare(event){
    let value = Number(squareInput.value)

    if(isNaN(value)){
        squareInput.value = 'is not number'
    }else{
        squareInput.value = square(value)
    }
   
}
*/
let greenButton = document.querySelector('.greenButton')
let redButton = document.querySelector('.redButton');
let block = document.querySelector('.block');

greenButton.addEventListener('click', changeToGreen);
redButton.addEventListener('click', changeToRed);

function changeToRed(event){
    block.classList.add('greenStyle');
}

function changeToRed(event){
    block.classList.add('redStyle');
}