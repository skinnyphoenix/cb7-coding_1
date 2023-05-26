const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

const createNewTask = (itemData) => {
  const toDoEl = cE("li");

  toDoEl.textContent = itemData.content;

  toDoEl.addEventListener("click", () => {
    todoList = todoList.filter((todo) => todo.id !== itemData.id);
    listItemRender();
  });

  listEl.appendChild(toDoEl);
  return toDoEl;
};

const onSubmit = (e) => {
  todoList.push({ id: Date.now(), content: e.target[0].value });
  listItemRender();
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const listItemRender = () => {
  textInputEl.value = "";
  listEl.textContent = "";
  todoList.forEach((todo) => createNewTask(todo));
  console.log(todoList);
};

const formEl = qS("form");
const listEl = qS(".list");
const textInputEl = qS(".textInput");
let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

listItemRender();

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit(e);
});
