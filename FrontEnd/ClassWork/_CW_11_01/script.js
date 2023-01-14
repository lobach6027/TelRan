const todos = [
  {
    id: 1,
    title: "hgjg",
    dttm: "ghjgjkghgh",
    done_flg: true,
  },
  {
    id: 1,
    title: "hgjg",
    dttm: "ghjgjkghgh",
    done_flg: false,
  },
];

const add_todo = document.querySelector(".add_todo");

add_todo.addEventListener("submit", (e) => {
  e.preventDefault();
  const { title } = e.target;
  const new_todo = {
    id: Date.now(),
    title: title.value,
    dttm: new Date().toLocaleString(),
    done_flg: false,
  };
  todos.push(new_todo);
  rerender();
  title.value = "";
});

function rerender() {

  const todo_container = document.querySelector(".todo_container");
  todo_container.innerText = "";
  let  res_positive = todos.filter((item)=>item.done_flg)
let  res_negative = todos.filter((item)=>!item.done_flg)
console.log(res_negative.length,res_positive.length);
const count_container = document.querySelector('.count_container')
count_container.innerText = `done=${res_positive.length}; not done = ${res_negative.length}`
  




  todos.forEach((todo) => {
    const title_el = document.createElement("p");
    const dttm_el = document.createElement("p");
    const container = document.createElement("div");
    container.append(title_el, dttm_el);

    title_el.innerText = todo.title;
    dttm_el.innerText = todo.dttm;

    const change_state = document.createElement("button");

    change_state.addEventListener("click", () => {
      console.log(todo.id);

      // const target = todos.find((item) => {item.id===todo.id;});
      //target.done_flg = !target.done_flg;
      todo.done_flg = !todo.done_flg;
      rerender();
    });

    const full_container = document.createElement("div");
    full_container.append(container, change_state);
    full_container.classList.add("item");

    change_state.innerText = todo.done_flg ? "done" : "to be done";
    change_state.style.backgroundColor = todo.done_flg ? "#e74c3c" : "#16a085";

    if (todo.done_flg === true) {
      full_container.classList.add("done");
    }
    todo_container.append(full_container);
  });
}
rerender();
