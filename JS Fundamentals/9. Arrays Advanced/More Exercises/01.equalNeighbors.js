function equalNeighbors(params) {
  let counter = 0;
  for (let i = 0; i < params.length; i++) {
    let currEl = params[i];
    for (let k = 0; k < currEl.length-1; k++) {
        let el1 = currEl[k];
        let el2 = currEl[k + 1]
      if (el1 === el2) {
        counter++;
      }
    }
  }
  for (let i = 0; i < params.length - 1; i++) {
    let firstEl = params[i];
    let secondEl = params[i + 1];

    for (let index = 0; index < firstEl.length; index++) {
      if (firstEl[index] === secondEl[index]) {
        counter++;
      }
    }
  }
  console.log(counter);
}
// equalNeighbors([
//   ["2", "3", "4", "7", "0"],
//   ["4", "0", "5", "3", "4"],
//   ["2", "3", "5", "4", "2"],
//   ["9", "8", "7", "5", "4"],
// ]);
// equalNeighbors([
//   ["test", "yo", "yo", "ho"],
//   ["well", "done", "no", "6"],
//   ["not", "done", "yet", "5"],
// ]);
equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
]);