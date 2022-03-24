function maxNumber(array) {
  let maxN = [];
  let isBigest = false;
  let currentNumber = 0;
  for (let i = 0; i < array.length; i++) {
    currentNumber = Number(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      if (currentNumber > Number(array[j])) {
        isBigest = true;
      } else {
        isBigest = false;
        break;
      }
      if (j >= array.length -1  && isBigest) {
        maxN.push(currentNumber);
        isBigest = false;
      }
    }
  }
  maxN.push(currentNumber);
  console.log(maxN.join(" "));
}
maxNumber([14, 24, 3, 19, 15, 17]);
