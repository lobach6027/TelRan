/*const arr = {
    data: [12,2,3]
}

localStorage.setItem('test', JSON.stringify(arr));
console.log((JSON.parse(localStorage.getItem('test'))));*/

function write_local(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function read_local() {
  return JSON.parse(localStorage.getItem("tasks")) ?? [];
}

const addTask = document.querySelector(".add_task");
const container = document.querySelector(".tasks");

addTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = event.target.task.value;

  write_local([...read_local(), { id: Date.now(), task }]);
  event.target.task.value = "";
  rerender();
});

function createCard(title,id){
  const pElement = document.createElement("p");
  const divElement = document.createElement("div");
  const buttonElement = document.createElement("button");
  divElement.append(pElement,buttonElement)
  pElement.innerText = title;
  buttonElement.innerText = 'Delete'

  buttonElement.addEventListener('click',()=>{
    deleteCard(id);
  })
  return divElement
}

function rerender() {
  container.innerText = "";
  if (read_local().length === 0) {
    const pElement = document.createElement("p");
    pElement.innerText = "no tasks";
    container.append(pElement);
  } else {
    read_local().forEach((element) => {
      const new_card = createCard(element.task,element.id);
      container.append(new_card);
    });
  }
}
rerender();

function deleteCard(id){
  const array = read_local().filter((elem)=>elem.id!==id)
  write_local(array);
  rerender();
}