function primeNumberChecker(num) {
  let sum = 0;
  if (isPrime(num)) {
    sum += num;
  }
  //console.log(isPrime ? "true" : "false");
  console.log(sum);
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let index = 2; index < num; index++) {
      if (num % index == 0) {
        return false;
      }
      return true;
    }
  }
}
primeNumberChecker(10);
