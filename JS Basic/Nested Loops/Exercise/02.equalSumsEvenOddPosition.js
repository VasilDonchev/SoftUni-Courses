function _equalSumsEvenOddPosition(input) {
  let n1 = input[0];
  let n2 = input[1];
  let output = "";
  for (let k = n1; k <= n2; k++) {
    let currentNumber = "" + k;
    let oddSum = 0;
    let evenSum = 0;

    for (let even = 0; even < 6; even += 2) {
      let element = Number(currentNumber[even]);
      evenSum += element;
    }
    for (let odd = 1; odd <= 5; odd += 2) {
      let element = Number(currentNumber[odd]);
      oddSum += element;
    }
    if (oddSum == evenSum) {
      output += currentNumber + " ";
    }
  }
  console.log(output);
}
_equalSumsEvenOddPosition(["100115", "100120"]);
