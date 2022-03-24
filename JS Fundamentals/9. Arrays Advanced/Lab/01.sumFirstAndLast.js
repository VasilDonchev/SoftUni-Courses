function sumFirstAndLast(arr) {
let result = Number(arr.shift()) + Number(arr.pop());
console.log(result);
}
sumFirstAndLast(['20', '30', '40']);