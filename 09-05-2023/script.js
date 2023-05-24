//***** ESERCIZIO 1 *****

function userPrompt() {
  const userInput = prompt("Inserisci un testo");
  output.textContent = userInput;
}

const button = document.querySelector(".buttonEx1");
const output = document.querySelector(".outputEx1");

button.addEventListener("click", userPrompt);

//***** ESERCIZIO 2 *****

function showInput() {
  outputTextEl.textContent = targetEl.value;
}

const targetEl = document.querySelector("#target");
const buttonEx2El = document.querySelector(".buttonEx2");
const outputTextEl = document.querySelector(".outputText");

buttonEx2El.addEventListener("click", showInput);

//***** ESECIZIO AVANZATO *****

function addElement() {
  //Creazione List Item
  const listItemEl = document.createElement("li");
  // Inseriamo il valore dentro il listato (li)
  listItemEl.textContent = inputEx3El.value;
  // Inseriamo il list item nella lista
  list1El.appendChild(listItemEl);
}

const inputEx3El = document.querySelector("#inputEx3");
const list1El = document.querySelector("#list__1");
const ex3ButtonEl = document.querySelector("#ex3Button");

ex3ButtonEl.addEventListener("click", addElement);
