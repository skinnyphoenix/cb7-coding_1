// È tempo della Todo-list. Ragazzi, dopo aver riflettuto su quanto vi dicevo a lezione per sperimentare, vi lascio questa sfida, ricordandovi che l'avanzato è 'opzionale' e che potrete recuperarlo/completarlo anche successivamente.

// Creare un'applicazione "To-Do List" utilizzando HTML, CSS e JavaScript. Questa applicazione dovrebbe permettere all'utente di:

// Inserire un nuovo compito da fare in un campo di input.
// Premere un bottone per aggiungere il compito alla lista. (Con metodo HTTP POST)
// Visualizzare la lista dei compiti da fare.
// Cancellare un compito dalla lista cliccando su di esso. (Con metodo HTTP DELETE)
import { GETtodobyuserId } from "./fn/http.js";

const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

const createEl = (type, cls = null, textContent = null, parent, ...attrs) => {
  const element = cE(type);
  element.className = cls;
  element.textContent = textContent;
  attrs.length > 0 ? attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value)) : " ";
  parent.append(element);
  console.log("ciao");

  return element;
};

const createToDoEl = (obj) => {
  const wrapperEl = createEl("div", "wrapperEl", null, mainEl);
  const formEl = createEl("form", "inputDiv", null, wrapperEl);
  const textInputEl = createEl("input", null, null, formEl, { name: "type", value: "text" }, { name: "placeholder", value: "Inserisci qui" });
  const submitInputEl = createEl("submit", "btnTodo", null, formEl, { name: "type", value: "submit" });
  const wrapperToDoListEl = createEl("div", "wrapperToDoList", null, wrapperEl);

  GETtodobyuserId().then(({ todos }) => todos.forEach((todo) => createSingleToDoEl(todo, wrapperToDoListEl)));

  return wrapperEl;
};

const createSingleToDoEl = (obj, parent) => {
  const wrapperToDoEl = createEl("div", "wrapperToDo", null, parent);
  const completedTaskEl = createEl("input", obj.completed ? "completedTaskOk" : "completedTaskNotOk", null, wrapperToDoEl, { name: "type", value: "checkbox" }, { name: obj.completed ? "checked" : false, value: "" });
  const toDoTextEl = createEl("p", null, obj.todo, wrapperToDoEl);

  return wrapperToDoEl;
};

const mainEl = qS(".main");

createToDoEl();
