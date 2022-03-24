function arrayModifier(arr) {
  let sequence = arr.shift().split(" ").map(Number);
  let command = arr.shift().split(" ");
  function swap(a, b) {
    [sequence[a], sequence[b]] = [sequence[b], sequence[a]]; // destructuring assignment
    // let temp = sequence[a];
    // sequence[a] = sequence[b];
    // sequence[b] = temp;
  }
  
  let multiply = (a, b) => (sequence[a] *= sequence[b]);
  //let decrease = sequence.map(x => x-1)
  while (command[0] != "end") {
    let a = Number(command[1]);
    let b = Number(command[2]);
    switch (command[0]) {
      case "swap":
        swap(a, b);

        break;
      case "multiply":
        multiply(a, b);
        break;
      case "decrease":
        let decrease = sequence.map((x) => x - 1);
        sequence = decrease;
        break;
    }
    command = arr.shift().split(" ");
    //console.log(command);
  }
  console.log(sequence.join(", "));
}
// arrayModifier([
//   "23 -2 321 87 42 90 -123",
//   "swap 1 3",
//   "swap 3 6",
//   "swap 1 0",
//   "multiply 1 2",
//   "multiply 2 1",
//   "decrease",
//   "end",
// ]);

arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
