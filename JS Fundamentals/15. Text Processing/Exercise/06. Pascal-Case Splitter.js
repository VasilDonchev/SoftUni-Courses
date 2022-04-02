function pascalCaseSpliter(input) {
  let pascalCaseArr = [];
  let currWord = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] !== input[i].toUpperCase()) {
currWord += input[i];
    } else {
        pascalCaseArr.push(currWord);
        currWord = input[i];
    }
  }
  pascalCaseArr.push(currWord);
  console.log(pascalCaseArr.join(', '));
}
pascalCaseSpliter("HoldTheDoor");
