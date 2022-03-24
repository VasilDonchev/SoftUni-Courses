function counterStrike(arr) {
  let energy = Number(arr.shift());
  let command = arr.shift();
  let count = 0;

  while (command !== "End of battle") {
    let distance = Number(command);
    if (energy >= distance) {
      count++;
      energy -= distance;
    } else {        
       
      console.log(
        `Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
        break;
    }
    if (count % 3 == 0) {
        energy+= count;
    }
    command = arr.shift();
  }
  if (command === "End of battle") {
      console.log(`Won battles: ${count}. Energy left: ${energy}`);
  }
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "70", "10"]);
//counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
