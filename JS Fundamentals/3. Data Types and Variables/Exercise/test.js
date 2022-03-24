["a", "b"].concat(["c"]); // ['a', 'b', 'c']
["a", "b", "c"].join("~"); // 'a~b~c'
["a", "b", "c"].slice(1); // ['b','c']
["a", "b", "b"].indexOf("b"); // 1
["a", "b", "b"].lastIndexOf("b"); // 2

[1, 2, 3].every((x) => x < 5); // true
[1, 2, 3, 4].some((x = x < 3)); // true
[1, 2, 3].filter((x) => x < 2); // [1]

["a", "b", "c"].forEach((x) => console.log(x));
// "a" "b" "c"

[1, 2, 3].map((x) => x * 2); //[2, 4, 6]
[1, 2, 3].reduce((x, y) => x * y); // 6
[1, 3, 2].sort(); //[1, 2, 3]
[1, 2, 3].reverse(); //[3, 2, 1]
[1, 2, 3].length; // 3

let arr = [1, 2, 3];
// bellow operators are on new array arr=[1,2,3]
let x = arr.shift();    // arr[2,3], x = 1
let x = arr.unshift(5); // arr[5,1,2,3], x = 4
let x = arr.pop();      // arr[1,2] x = 3
let x = arr.push(7);    // arr[1,2,3,7], x = 4

const months = ['Jan', 'March', 'April', 'June'];
// splice(startIndex, deleteCount, item)
months.splice(1,0,'Feb');   // ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4,1, 'May');  // ['Jan', 'Feb', 'March', 'April', 'May']
