/*const arr = {
    data:[1,2,3]}
localStorage.setItem('test',JSON.stringify(arr));
console.log(localStorage.getItem('test'))

console.log(JSON.parse(localStorage.getItem('test')))*/

//реализовать процесс в js, который при отправке формы выводит
//   содержимое поля ввода в консоль

let write_local = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));

let read_local = () => JSON.parse(localStorage.getItem("tasks")) ?? [];

const form = document.querySelector(".add_task");
const tasksContainer = document.querySelector(".tasks");
let tasks = read_local();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = event.target.task.value;

  write_local([...read_local(), { id: Date.now(), task }]);

  event.target.task.value = "";
  rerender();
});

function create_card(task, id) {
  const container = document.createElement("div");
  const oneTask = document.createElement("p");
  const btn = document.createElement("button");
  container.append(oneTask, btn);
  oneTask.innerText = task;
  btn.innerText = "delete";
  btn.addEventListener("click", () => {
    deleteEl(id);
    //console.log( `delete ${id} `)
  });
  return container;
}

function deleteEl(id) {
  let arr = read_local().filter((elem) => elem.id != id);
  write_local(arr);
  rerender();
}

function rerender() {
  tasksContainer.innerText = "";
  if (read_local().length === 0) {
    const oneTask = document.createElement("p");
    oneTask.innerText = "no tasks";
  } else {
    read_local().forEach(({ task, id }) => {
      const oneTask = create_card(task, id);
      tasksContainer.append(oneTask);
    });
  }
}
rerender();
