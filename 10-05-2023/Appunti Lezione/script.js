//**********FUNZIONI COMPLESSE**********

// => ***ARROW FUNCTION*** =>

//Per adesso abbiamo sempre scritto la funzione in questo modo:

function x() {
  // .......
}

//Le arrow function svolgono la stessa identica "funzione"
//ma scritta in una sintassi più "minimale". Ci sono due modi:
//Possiamo scrivere l'arrow function in una sola riga, quindi:

const x = (num1, num2) => num1 + num2;

//In questo caso il "=>" sottointende un return.

//Nel caso in cui volessimo aggiungere più valori dobbiamo aprire le {}, quindi:

const y = (num1, num2) => {
  return; //......
};

//In questo caso il return non è più sottointeso quindi dobbiamo specificarlo.

//***************************************/

//SPREAD SINTAX

//E' possibile inserire gli elementi di un array come parametri di una funzione.

const evenNumbers = [2, 4, 6, 8, 10];
function sum([...pippo]) {
  for (let num of pippo) console.log(num);
}

//Importante: In questo caso "pippo" è un valore arbitrario. Quest'ultimo prenderà il valore dell'array definito sopra

// ***** CALLBACK *****

//INIZIALIZZIONE CALLBACK

const calculator = (operationFn) => operationFn;

//CALLBACK - Non ancora definita
const sum1 = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;
const mod = (num1, num2) => num1 % num2;

//CALLBACK VERA E PROPRIA
console.log(calculator(mult(2, 3)));
