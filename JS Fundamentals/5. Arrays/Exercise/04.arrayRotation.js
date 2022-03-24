function arrayRotation(arr, n) {
  for (let index = 0; index < n; index++) {
    let temp = arr.shift();
    arr.push(temp);
  }
  console.log(arr.join(" "));
}
arrayRotation([2, 4, 15, 31], 5);
