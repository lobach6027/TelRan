const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
const input = document.querySelector(".input-field");

if (localStorage.getItem("text")) {
  input.value = localStorage.getItem("text");
}

main.addEventListener("input", (event) => {
  let inputField = input.value;
  if (inputField.length != 0) {
    localStorage.setItem("text", inputField);
  } else {
    localStorage.setItem("text", inputField);
  }
});

// ------------------------
if (localStorage.getItem("mode") === "summer") {
  main.classList.add("summer");
}

btn.addEventListener("click", () => {
  main.classList.toggle("summer");
  if (main.classList.contains("summer")) {
    localStorage.setItem("mode", "summer");
  } else {
    localStorage.setItem("mode", "winter");
  }
});
