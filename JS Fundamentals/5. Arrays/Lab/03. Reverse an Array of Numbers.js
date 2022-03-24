function reversAnArrayOfNumbers(n, arr) {
  let slice = [];
  // take slice from original array
  //   for (let index = 0; index < n; index++) {
  //     slice.push(arr[index]);
  //   }
   let result = [];
  // print new array in reverse
//   for (let i = slice.length - 1; i >= 0; i--) {
//     result.push(slice[i]);
  //}
  for ( let i= n-1; i>=0; i--){
    result.push(arr[i]);
  }
  console.log(result.join(" "));
}
reversAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
