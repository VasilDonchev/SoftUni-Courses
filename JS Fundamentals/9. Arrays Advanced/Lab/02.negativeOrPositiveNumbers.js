function negativeOrPositive(arr) {
  let newArr = [];
  arr = arr.map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArr.push(arr[i]);
    } else {
      newArr.unshift(arr[i]);
    }
  }
  console.log(newArr.join("\n"));
}
//negativeOrPositive(["7", "-2", "8", "9"]);
negativeOrPositive(["3",'-2','0','-1'])
