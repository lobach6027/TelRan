/*let redButton = document.querySelector('#red');
let greenButton = document.querySelector('#green');
let blueButton = document.querySelector('#blue');
let imgButton = document.querySelector('#img');

redButton.addEventListener('click', ()=>
document.body.style.background = 'red');
greenButton.addEventListener('click', ()=>
document.body.style.background = 'green');
blueButton.addEventListener('click',()=>
document.body.style.background = 'blue' );
imgButton.addEventListener('click',()=>
document.body.style.backgroundImage = "url(./1.jpg)" );
*/

let buttons = document.querySelectorAll('.item');

console.log(buttons)

const buttonsArr = Array.from(buttons);

buttonsArr.map(button=>{
    button.addEventListener('click',()=>{

    let atr = button.getAttribute('id')

document.body.style.background = atr;
}
//// ДЗ. При нажатии на кнопку случайный цвет, менять цвет фона на случайный.






)});