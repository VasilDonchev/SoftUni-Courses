function memoryGame(arr) {
  let sequence = arr.shift().split(" ");
  let command = arr[0];
  let index = 0;
  let numberOfMoves = 0;
  let isWin = false;
  while (command !== "end") {
    let currentCommand = command.split(" ").map(Number);
    let first = currentCommand[0];
    let second = currentCommand[1];
    if (sequence.length == 0) {
      isWin = true;
      break;
    }
    numberOfMoves++;

    if (
      first < 0 ||
      first >= sequence.length ||
      second < 0 ||
      second >= sequence.length ||
      first == second
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      sequence.splice(
        Math.floor(sequence.length / 2),
        0,
        "-" + numberOfMoves + "a",
        "-" + numberOfMoves + "a"
      );
      index++;
      command = arr[index];
      continue;
    }
    if (sequence[first] == sequence[second]) {
      console.log(
        `Congrats! You have found matching elements - ${sequence[first]}!`
      );

      if (first > second) {
        sequence.splice(first, 1);
        sequence.splice(second, 1);
      } else {
        sequence.splice(second, 1);
        sequence.splice(first, 1);
      }
    } else {
      console.log("Try again!");
    }

    index++;
    command = arr[index];
  }
  if (isWin || (command == "end" && sequence.length == 0)) {
    console.log(`You have won in ${numberOfMoves} turns!`);
  } else {
    console.log(`Sorry you lose :(
        ${sequence.join(" ")}`);
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
//memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
