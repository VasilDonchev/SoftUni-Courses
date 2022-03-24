function numbers(input) {
  let sequenceOfNumbers = input.split(" ").map(Number);
  let sum = 0;
  let averageValue = 0;

  for (const el of sequenceOfNumbers) {
    sum += el;
    averageValue = sum / sequenceOfNumbers.length;
  }
  // let result = sequenceOfNumbers.filter((sequenceOfNumbers, i) => i > averageValue);
  let result = [];
  for (let i = 0; i < sequenceOfNumbers.length; i++) {
    if (sequenceOfNumbers[i] > averageValue) {
      result.push(sequenceOfNumbers[i]);
    }
  }
  if (result.length == 0) {
      console.log('No');
  }else {

      console.log(result.sort(function(a, b){return b-a}).slice(0,5).join(' '));
  }
}
numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("-1 -2 -3 -4 -5 -6");
numbers("1");
