function ex1() {
  let myArray = [24, 34, 55, 22, 13];
  for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
  }
}

function ex2() {
  let myArray2 = [5, 23, 45, 2325, 53321];

  let minValue = Math.min(...myArray2);
  let maxValue = Math.max(...myArray2);

  console.log(minValue);
  console.log(maxValue);
}

// DICHIARAZIONI FUNZIONI

// ex1();
// ex2();
