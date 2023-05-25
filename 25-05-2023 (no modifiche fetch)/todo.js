// È tempo della Todo-list. Ragazzi, dopo aver riflettuto su quanto vi dicevo a lezione per sperimentare, vi lascio questa sfida, ricordandovi che l'avanzato è 'opzionale' e che potrete recuperarlo/completarlo anche successivamente.

// Creare un'applicazione "To-Do List" utilizzando HTML, CSS e JavaScript. Questa applicazione dovrebbe permettere all'utente di:

// Inserire un nuovo compito da fare in un campo di input.
// Premere un bottone per aggiungere il compito alla lista. (Con metodo HTTP POST)
// Visualizzare la lista dei compiti da fare.
// Cancellare un compito dalla lista cliccando su di esso. (Con metodo HTTP DELETE)
import { DELETEtodouserbyId, GETtodobyuserId } from "./fn/http.js";

const qS = (el) => document.querySelector(el);
const cE = (el) => document.createElement(el);

const createEl = (type, cls = null, textContent = null, parent, ...attrs) => {
  const element = cE(type);
  element.className = cls;
  element.textContent = textContent;
  attrs.length > 0 ? attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value)) : " ";
  parent.append(element);
  return element;
};

const createToDoEl = (obj) => {
  const wrapperEl = createEl("div", "wrapperEl", null, mainEl);
  const formEl = createEl("form", "inputDiv", null, wrapperEl);
  const textInputEl = createEl("input", null, null, formEl, { name: "type", value: "text" }, { name: "placeholder", value: "Inserisci qui" });
  const submitInputEl = createEl("input", "btnTodo", "Invio", formEl, { name: "type", value: "submit" });
  const wrapperToDoListEl = createEl("div", "wrapperToDoList", null, wrapperEl);

  GETtodobyuserId().then(({ todos }) => todos.forEach((todo) => createSingleToDoEl(todo, wrapperToDoListEl)));

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const newText = {
      todo: e.target[0].value,
      completed: false,
      id: 8,
    };
    createSingleToDoEl(newText, wrapperToDoListEl);
    e.target[0].value = "";
  });

  return wrapperEl;
};

//Parent = wrapperToDoListEl

const createSingleToDoEl = (obj, parent) => {
  const wrapperToDoEl = createEl("div", "wrapperToDo", null, parent, { name: "id", value: obj.id });
  const completedTaskEl = createEl("input", obj.completed ? "completedTaskOk" : "completedTaskNotOk", null, wrapperToDoEl, { name: "type", value: "checkbox" }, { name: obj.completed ? "checked" : false, value: "" });
  const toDoTextEl = createEl("p", "toDoText", obj.todo, wrapperToDoEl);
  const deleteBtnEl = createEl("button", "deleteBtn", "🗑️", wrapperToDoEl);

  deleteBtnEl.addEventListener("click", (e) => {
    DELETEtodouserbyId(wrapperToDoEl.attributes.id.value);
    // console.dir(wrapperToDoEl);
    parent.removeChild(wrapperToDoEl);
  });

  return wrapperToDoEl;
};

const mainEl = qS(".main");

createToDoEl();
