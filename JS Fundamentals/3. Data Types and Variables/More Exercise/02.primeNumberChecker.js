function primeNumberChecker(num) {
  let isPrime = false;
  if (num >= 2) {
    isPrime = true;
  }
  if (num % 2 == 0) {
    isPrime = false;
  }
  if (num % 3 == 0) {
    isPrime = false;
  }
  console.log(isPrime ? "true" : "false");
}
primeNumberChecker(383);