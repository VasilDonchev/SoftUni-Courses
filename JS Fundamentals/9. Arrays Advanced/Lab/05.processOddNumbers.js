function processOddNumbers(arr) {
  let oddArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      oddArr.unshift(arr[i] * 2);
    }
  }
  console.log(oddArr.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
