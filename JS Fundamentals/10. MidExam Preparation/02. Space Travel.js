function spaceTravel(arr) {

  let commands = arr.shift().split("||");
  let length = arr.length;
  let fuel = Number(arr.shift());
  let ammunition = Number(arr.shift());
  let command = commands.shift();
  let succses = true;
  for (let index = 0; index < length; index++) {
    let tokens = command.split(" ");
    let move = tokens.shift();
    let parameter = Number(tokens.shift());

    switch (move) {
      case "Travel":
        if (fuel > 0) {
          fuel -= parameter;
          console.log(`The spaceship travelled ${parameter} light-years.`);
        } else {
          succses = false;
          console.log("Mission failed.");
          break;
        }
        break;
      case "Enemy":
        if (ammunition >= parameter) {
          console.log(`An enemy with ${parameter} armour is defeated.`);
          ammunition -= parameter;
        } else if (fuel >= parameter * 2) {
          fuel -= parameter * 2;
          console.log(`An enemy with ${parameter} armour is outmaneuvered.`);
        } else {
          succses = false;
          console.log("Mission failed.");
        }

        break;
      case "Repair":
        fuel += parameter;
        ammunition += parameter * 2;
        console.log(`Ammunitions added: ${parameter * 2}.`);
        console.log(`Fuel added: ${parameter}.`);
        break;
    }
    command = commands.shift();
  }
  if (succses) {
    console.log("You have reached Titan, all passengers are safe.");
  }
}
//spaceTravel(["Travel 10||Enemy 30||Repair 15||Titan", "50", "80"]);
spaceTravel([
  "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
  "60",
  "100",
]);
