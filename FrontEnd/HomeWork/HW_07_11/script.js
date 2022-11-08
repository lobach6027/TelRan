console.log(
  "Создайте кнопку в html при нажатию на которую в консоль выводится привет"
);

let button = document.querySelector(".button");

button.addEventListener("click", greatings);

function greatings() {
  console.log("Hello!");
}



console.log('Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать border-radius 50px и overflow hidden. При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()')

let foto = document.querySelector(".foto");
let mybutton = document.querySelector(".buttonSecond");


mybutton.addEventListener("click", changeStyle);

function changeStyle(event) {
  foto.classList.toggle("blockChange");
}
