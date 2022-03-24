function simpleCalculator(a, b, operator) {
  let multiplay = (a, b) => a * b;
  let didive = (a,b) => a / b;
  let add = (a,b) => a + b;
  let subtract = (a,b) => a - b;
  let result = 0;
  switch (operator) {
    case "multiply":
      result = multiplay(a, b);
      break;
    case "divide":
        result = didive(a, b);
      break;
    case "add":
        result = add(a, b);
      break;
    case "subtract":
        result = subtract(a, b);
      break;

    default:
      break;
  }
  console.log(result);
}

simpleCalculator(40, 8, "divide");
