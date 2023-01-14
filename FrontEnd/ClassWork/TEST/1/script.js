const root = document.querySelector(".root");
const form = document.querySelector(".add-form");

function createPost(title, text) {
  const container = document.createElement("div");
  container.classList.add("post");
  const titleEl = document.createElement("p");
  titleEl.classList.add("title");
  const textEl = document.createElement("p");

  titleEl.innerText = title;
  textEl.innerText = text;
  container.append(titleEl, textEl);
  root.append(container);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id.value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((resp) => resp.json())
    .then(({ title, body }) => createPost(title, body));
  event.target.id.value = "";
});

const formTwo = document.querySelector(".formTwo");
formTwo.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleElement = e.target.title.value;
  const areaElement = e.target.area.value;
  const textElement = e.target.idOfForm.value;

  console.log(titleElement, areaElement, textElement);
  e.target.title.value = "";
  e.target.area.value = "";
  e.target.idOfForm.value = "";
});
