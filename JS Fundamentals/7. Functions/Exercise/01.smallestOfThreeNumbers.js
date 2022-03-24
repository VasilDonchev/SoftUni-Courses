function smalestOfThree(num1, num2, num3) {
//   let smalestNum = function (num1, num2, num3) {
//     let smallest = 0;
//     if (num1 <= num2 && num1 <= num3) {
//       smallest = num1;
//     } else if (num2 <= num1 && num2 <= num3) {
//       smallest = num2;
//     } else {
//       smallest = num3;
//     }
//     return smallest;
//   };
let smalestNum = (num1, num2, num3) => Math.min(num1, num2, num3)
  console.log(smalestNum(num1, num2, num3));
}
smalestOfThree(2, 5, 3);
