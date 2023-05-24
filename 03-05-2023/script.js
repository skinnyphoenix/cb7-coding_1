function es1() {
  alert("Esercizio 1");

  let userNumber = parseInt(prompt("Inserisci un numero!"));
  if (userNumber % 2 === 0) {
    console.log("Il numero è pari");
  } else {
    console.log("Il numero è dispari");
  }
}

function es2() {
  alert("Esercizio 2");

  let userNumber2 = parseInt(prompt("Inserisci un numero!"));
  userNumber2 % 2 === 0
    ? console.log("Il numero è pari")
    : console.log("Il numero è dispari");
}

function es3() {
  alert("Esercizio 3 - Avanzato");

  let userChoise1 = parseInt(prompt("Inserisci il primo numero"));
  let userSign = prompt("Scegli l'operatore desiderato");
  let userChoise2 = parseInt(prompt("Inserisci il secondo numero"));

  let result;

  switch (userSign) {
    case "+":
      result = userChoise1 + userChoise2;
      console.log("Il risultato è " + result);
      break;

    case "-":
      result = userChoise1 - userChoise2;
      console.log("Il risultato è " + result);
      break;

    case "/":
      result = userChoise1 / userChoise2;
      console.log("Il risultato è " + result);
      break;

    case "*":
      result = userChoise1 * userChoise2;
      console.log("Il risultato è " + result);
      break;

    default:
      console.log("Operatore non valido");
  }
}

//------ RICHIAMO FUNZIONI -------
es1();
es2();
es3();
