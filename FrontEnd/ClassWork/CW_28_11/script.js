const btn = document.querySelector(".change_mode");
const mainBlock = document.querySelector(".main p");

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

const plusBtn = document.querySelector(".text_size_btns .plus");
const minusBtn = document.querySelector(".text_size_btns .minus");
/*
mainBlock.style.fontSize = '15px';


plusBtn.addEventListener('click',()=>{


   const existingFontSize = parseInt(mainBlock.style.fontSize);
mainBlock.style.fontSize = existingFontSize + 1+'px';
})
minusBtn.addEventListener('click',()=>{
    const existingFontSize = parseInt(mainBlock.style.fontSize);
    mainBlock.style.fontSize = existingFontSize - 1+'px';
})
*/

let fontSize;

if (localStorage.getItem('fontSize')) {
    
    fontSize = localStorage.getItem('fontSize')
  } else{
      fontSize = 12;

      localStorage.setItem('fontSize',fontSize);
  
  
  }
mainBlock.style.fontSize = fontSize + "px";

plusBtn.addEventListener("click", () => {
  fontSize+=1;
  localStorage.setItem('fontSize',fontSize)
  mainBlock.style.fontSize = fontSize + "px";
});
minusBtn.addEventListener("click", () => {
  fontSize-=1;
  localStorage.setItem('fontSize',fontSize)
  mainBlock.style.fontSize = fontSize + "px";
});





