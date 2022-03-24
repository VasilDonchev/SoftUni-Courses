function shootForTheWin(arr) {
  let sequence = arr.shift().split(" ").map(Number);
  //console.log(sequence);
  let command = arr.shift();
  let target;
  let count = 0;

  while (command !== "End") {
    let index = Number(command);
    if (index <= sequence.length - 1) {
      target = sequence[index];
      count++;
      sequence[index] = -1;
      for (let i = 0; i < sequence.length; i++) {
        if (target < sequence[i] && sequence[i] != -1) {
          sequence[i] -= target;
        } else if (target >= sequence[i] && sequence[i] != -1) {
          sequence[i] += target;
        }
      }
      //console.log(sequence);
      command = arr.shift();
    } else {
      command = arr.shift();
    }
  }
  console.log(`Shot targets: ${count} -> ${sequence.join(" ")}`);
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
//shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
