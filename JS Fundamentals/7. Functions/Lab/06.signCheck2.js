function signCheck(n1, n2, n3) {
  let totalNegative = 0;
  let = isNegative = (x) => x < 0;

  if (isNegative(n1)) { // (n1 < 0)
    totalNegative++;
  }
  if (isNegative(n2)) { // (n2 < 0)
    totalNegative++;
  }
  if (n3 < 0) {
    totalNegative++;
  }
  if (totalNegative % 2 == 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}
console.log(signCheck(5, 12, -15));
