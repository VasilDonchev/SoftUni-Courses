function solve(arr) {
  let newArr = [];
  let step = arr[arr.length - 1];

  newArr.push(arr[0]);
  for (let i = 1; i < arr.length -1; i++) { 
if (i % step == 0){
    newArr.push(arr[i]);
  }
}
console.log(newArr.join(" "))
}
solve(['5', '20', '31', '4', '20', '2']);
