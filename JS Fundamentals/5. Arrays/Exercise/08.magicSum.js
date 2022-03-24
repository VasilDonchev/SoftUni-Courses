function magicSum(array, n) {
  let uniquePairs = [];

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (currentNumber + array[j] == n) {
        console.log(`${currentNumber} ${array[j]}`);
      }
    }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);
