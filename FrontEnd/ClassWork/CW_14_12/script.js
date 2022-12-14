fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((resp) => resp.json())
  .then((data) => console.log(data));

const root = document.querySelector(".root");
function createPost(title, SomeString) {
  const container = document.createElement("div");
  container.classList.add("post");
  const titleElem = document.createElement("p");
  titleElem.classList.add("subheader");
  const textElem = document.createElement("p");
  textElem.innerText = SomeString;
  titleElem.innerText = title;
  container.append(titleElem, textElem);
  root.append(container);
}

/*fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((resp) => resp.json())
  .then(({ title, body }) => createPost(title, body));*/

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id.value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((resp) => resp.json())
    .then(({ title, body }) => createPost(title, body));

  event.target.id.value = "";
});

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

const secondForm = document.querySelector(".add_post_form");
secondForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { title, body, newId } = event.target;
  Send(title.value, body.value, newId.value);
  title.value = "";
  body.value = "";
  newId.value = "";
});

function Send(title, body, newId) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: `${title}`,
      body: `${body}`,
      userId: `${newId}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => createPost(json.title,json.body));
    rerender();
}

const arr = [];

function rerender(){
    root.innerHTML = ''
    arr.push(Send(title, body, newId))
arr.forEach((item)=>{
createPost(item.title,item.body,item.newId);
})
}