//************ Esercizio 2 ************/

const qS = (element) => document.querySelector(element);

const firstNumEl = qS(".firstNum");
const operatorValueEl = qS(".operatorValue");
const secondNumEl = qS(".secondNum");
const sumButtonEl = qS(".sumButton");
const returnValue = qS(".sumReturn");

const calculatorCall = (operatorFn) => operatorFn;
const calculatorSum = (num1, num2) => num1 + num2;
const calculatorMult = (num1, num2) => num1 * num2;
const calculatorSub = (num1, num2) => num1 - num2;
const calculatorDiv = (num1, num2) => num1 / num2;

const calcPro = (operatorFn) => {
  switch (operatorValueEl.value) {
    case "+":
      returnValue.textContent = calculatorSum(
        parseInt(firstNumEl.value),
        parseInt(secondNumEl.value)
      );
      break;
    case "-":
      returnValue.textContent = calculatorSub(
        parseInt(firstNumEl.value),
        parseInt(secondNumEl.value)
      );
      break;
    case "*":
      returnValue.textContent = calculatorMult(
        parseInt(firstNumEl.value),
        parseInt(secondNumEl.value)
      );
      break;
    case "/":
      returnValue.textContent = calculatorDiv(
        parseInt(firstNumEl.value),
        parseInt(secondNumEl.value)
      );
      break;
    default:
      alert("Operatore non valido");
  }
};
sumButtonEl.addEventListener("click", calcPro);
