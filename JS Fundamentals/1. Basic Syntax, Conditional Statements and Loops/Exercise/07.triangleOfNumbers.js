function triangleOfNumbers(n) {
  for (let index = 1; index <= n; index++) {
    let sequence = "";
    for (let j = 0; j < index; j++) {
      sequence += index + " ";
    }
    console.log(sequence.trim());
  }
}
triangleOfNumbers(3);

function repeat(num){
  let number = num;
   
  for (let index = 1; index <= number; index++) {
    console.log(`${index} `.repeat(index));
  }
}
repeat(3);