function signCheck(numOne, numTwo, numThree) {
  
  let isPositive = (number) => number >= 0; // arrow function
  if (isPositive(numOne) && isPositive(numTwo) && isPositive(numThree)) {
    return result = 'Positive';
  }else if (!isPositive(numOne) && !isPositive(numTwo) && isPositive(numThree)) {
    return result = 'Positive';
  }else if (!isPositive(numOne) && isPositive(numTwo) && !isPositive(numThree)) {
    return result = 'Positive';
  } else if (isPositive(numOne) && !isPositive(numTwo) && !isPositive(numThree)) {
    return result = 'Positive';
  } else {
      return result = 'Negative'
  }

  // function isPositive(number) {   // nested function
  //   return number >= 0;
  // }
}
console.log(signCheck(5, 12, - 15));
