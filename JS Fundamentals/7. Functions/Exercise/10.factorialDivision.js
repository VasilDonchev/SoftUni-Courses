function factorialDivision(n1, n2) {

  function factorial(number) {
    let factorielN1 = 1;
    while (number > 0) {
        factorielN1 *= number;
        number -= 1;
    }
    return factorielN1;
  }

console.log((factorial(n1) / factorial(n2)).toFixed(2));
}
factorialDivision(5, 2);
