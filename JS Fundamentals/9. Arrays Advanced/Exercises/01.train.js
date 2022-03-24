function train(arr) {
  let vagonsArray = arr
    .shift()
    .split(" ")
    .map((x) => Number(x)); // to Array

  let maxPassengers = Number(arr.shift());

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i]; // string
    if (command.includes("Add")) {
      command = command.split(" "); // to Array
      vagonsArray.push(command[1]);
    } else {
      command = Number(arr[i]);
      for (let j = 0; j < vagonsArray.length; j++) {
        let passengers = Number(vagonsArray[j]);
        if (passengers + command <= maxPassengers) {
          passengers += command;
          vagonsArray[j] = passengers;
          break;
        }
      }
    }
  }

  console.log(vagonsArray.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
