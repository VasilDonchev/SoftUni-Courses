function dungeonestDark(input) {
  let health = 100;
  let coins = 0;
  let commands = input[0].split("|");
  let room = 0;
  for (let i = 0; i < commands.length; i++) {
    let [command, num] = commands[i].split(" ");
    num = Number(num);
    switch (command) {
      case "potion":
        if (health < 100) {
          room++;
          health += num;
          if (health > 100) {
            num = 100 - (health - num);
            health = 100;
          }
          console.log(`You healed for ${num} hp.`);
          console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        room++;
        console.log(`You found ${num} coins.`);
        coins += num;
        break;

      default:
        room++;
        health -= num;
        if (health > 0) {
          console.log(`You slayed ${command}.`);
        } else {
          console.log(`You died! Killed by ${command}.`);
          console.log(`Best room: ${room}`);
          return;
        }
        break;
    }
  }

  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
