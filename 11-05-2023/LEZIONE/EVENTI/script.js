//AGGIUNGERE ELEMENTI ALLA LISTA TO DO

const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

//Creiamo un input dinamicamente
const todoInputEl = cE("input");
const todoButtonEl = cE("button");

//Definiamo gli attributi
todoInputEl.setAttribute("type", "text");
todoInputEl.setAttribute("placeholder", "Add todo");
todoButtonEl.textContent = "Add todo";

todoButtonEl.className = "todoButton";
todoInputEl.className = "todoInput";

document.body.append(todoInputEl, todoButtonEl);

//Richiamo

todoInputEl.addEventListener('change', (event) => {
  console.log(event.target.value)
  todos.push( {
    todo: event.target.value
    completed: false,
  })
}
