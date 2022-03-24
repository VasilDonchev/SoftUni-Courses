function sumOfTwoNumbers(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let magicNumber = Number(input[2]);
  let counter = 0;
  let isEqual = false;

  for (let i = startNumber; i <= endNumber; i++) {
    for (let j = startNumber; j <= endNumber; j++) {
      counter++;
      if (i + j == magicNumber) {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
        isEqual = true;
        break;
      }
    }
    if (isEqual) {
      break;
    }
  }
  if (!isEqual) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["23", "24", "20"]);
