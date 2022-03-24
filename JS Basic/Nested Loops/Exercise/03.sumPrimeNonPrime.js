function _sumPrimeNonPrime(input) {
  let prime = 0;
  let nonPrime = 0;
  let currentNumber = input.shift();

  while (currentNumber !== "stop") {
    let num = Number(currentNumber);
    if (num < 0) {
      console.log(`Number is negative.`);
      currentNumber = input.shift();
      continue;
    }
    if (num == 1) {
      prime += num;
      currentNumber = input.shift();
      continue;
    }
    let isPrime = true;
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prime += num;

    } else {
      nonPrime += num;
    }
    currentNumber = input.shift();
  }
  console.log(`Sum of all prime numbers is: ${prime}`);
  console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}

_sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])

;
