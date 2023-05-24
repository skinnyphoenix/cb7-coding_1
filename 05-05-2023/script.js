//***** ESERCIZIO 2 *****

// function es1() {
//   alert("Esercizio 2");

//   let userChoise1 = parseInt(prompt("Inserisci il primo numero"));
//   let userSign = prompt("Scegli l'operatore desiderato");
//   let userChoise2 = parseInt(prompt("Inserisci il secondo numero"));

//   let result;

//   switch (userSign) {
//     case "+":
//       result = userChoise1 + userChoise2;
//       console.log("Il risultato è " + result);
//       break;

//     case "-":
//       result = userChoise1 - userChoise2;
//       console.log("Il risultato è " + result);
//       break;

//     case "/":
//       result = userChoise1 / userChoise2;
//       console.log("Il risultato è " + result);
//       break;

//     case "*":
//       result = userChoise1 * userChoise2;
//       console.log("Il risultato è " + result);
//       break;

//     default:
//       console.log("Operatore non valido");
//   }
// }

// es1();

//***** ESERCIZIO 3 *****

// function es3() {
//   const userInfo = {
//     name: "Giovanni",
//     age: 23,
//     height: 171,
//   };

//   console.log(`Il mio nome è ${userInfo["name"]}`);
//   console.log(`La tua età è ${userInfo["age"]}`);
//   console.log(`La tua altezza è ${userInfo["height"]}`);
// }

// es3();

// ****** ESERCIZIO AVANZATO ******

function userPrompt(num1, num2, operator) {
  function addition() {
    return num1 + num2;
  }

  function subtraction() {
    return num1 - num2;
  }

  function divisione() {
    return num1 / num2;
  }

  function moltiplicazione() {
    return num1 * num2;
  }

  if (operator === "+") {
    console.log(addition());
  } else if (operator === "-") {
    console.log(subtraction());
  } else if (operator === "/") {
    console.log(divisione());
  } else if (operator === "*") {
    console.log(moltiplicazione());
  } else {
    console.log("Questo non è un operatore matematico");
  }
}

userPrompt();
