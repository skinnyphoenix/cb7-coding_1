//ESERCIZIO 1

// Supponiamo di avere un array con le seguenti informazioni: nome, cognome e paese di origine di una persona.
// Usando il destructuring, crea tre variabili separate (nome, cognome e paese) a partire dall'array "persona".

let persona = ["Mario", "Rossi", "Palermo"];

let [nome, cognome, città, paese = "italia"] = persona;

console.log(nome, cognome, città, paese);

// let [nome] = persona;
// console.log(nome);
// let [, cognome] = persona;
// console.log(cognome);
// let [, , città] = persona;
// console.log(città);

console.log("/////////////////////////////////");
//Supponiamo di avere un oggetto che rappresenta un libro con le seguenti proprietà: titolo, autore e anno di pubblicazione.
// Usando il destructuring, crea tre variabili separate (titolo, autore, anno) a partire dall'oggetto "libro".

const libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
};

const { titolo, autore, anno, pubblicazione = "Giugno" } = libro;
console.log(titolo, autore, anno, pubblicazione);

// const { titolo } = libro;
// console.log(titolo);
// const { autore } = libro;
// console.log(autore);
// const { anno } = libro;
// console.log(anno);

console.log("/////////////////////////////////");
function sum(num1, num2 = 1) {
  return num1 + num2;
}
console.log(sum(2, 2));
