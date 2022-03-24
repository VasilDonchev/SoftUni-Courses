function numberModification(number) {
  let numberAsString = number.toString();
  let sum = 0;
  checkNumber(sum);
  while (sum / numberAsString.length < 5) {
    numberAsString += "9";
    sum = 0;
    checkNumber(sum);
  }
  function checkNumber(n) {
    for (let i = 0; i < numberAsString.length; i++) {
      sum += Number(numberAsString[i]);
    }
  }
  console.log(numberAsString);
}
numberModification(5835);
