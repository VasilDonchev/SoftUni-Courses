function calc(number, operator, number2) {
  let sum = 0;
  switch (operator) {
    case "+":
      sum = number + number2;
      // console.log(sum.toFixed(2));
      break;
    case "-":
      sum = number - number2;
      // console.log(sum.toFixed(2));
      break;
    case "*":
      sum = number2 * number;
      // console.log(sum.toFixed(2));
      break;
    case "/":
      sum = number / number2;
      // console.log(sum.toFixed(2));
      break;
  }
  console.log(sum.toFixed(2));
}
calc(25.5, "-", 3);
