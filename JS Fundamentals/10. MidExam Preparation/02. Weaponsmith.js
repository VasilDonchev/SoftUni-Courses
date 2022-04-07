function weaponsmith(input) {
  let weaponName = input.shift().split("|"); //.join("");
  let tokens = input.shift().split(" ");
  let command = tokens[0];

  while (command != "Done") {
    if (command == "Add") {
      let particle = tokens[1];
      let index = Number(tokens[2]);
      if (index >= 0 && index < weaponName.length) {
        let remAt = weaponName.splice(index, 0, particle);
      }
    } else if (command == "Remove") {
      let index = Number(tokens[1]);

      if (index >= 0 && index < weaponName.length) {
        let remAt = weaponName.splice(index, 1);
      }
    } else if (command == "Check") {
      let result = [];
      let secondCommand = tokens[1];
      if (secondCommand == "Even") {
        for (let k = 0; k < weaponName.length; k += 2) {
          result.push(weaponName[k]);
        }
        console.log(result.join(" "));
      } else if (secondCommand == "Odd") {
        for (let k = 1; k < weaponName.length; k += 2) {
          result.push(weaponName[k]);
        }
        console.log(result.join(" "));
      }
    }
    tokens = input.shift().split(" ");
    command = tokens[0];
  }
  console.log(`You crafted ${weaponName.join("")}!`);
}
//weaponsmith(["As|hb|ri|ng|er", "Remove 10", "Add lo 5", "Check Odd", "Done"]);
weaponsmith(["pa|Do|ha|mm|er", "Remove 0", "Add om 1", "Check Even", "Done"]);
weaponsmith(["Ta|es|to|la|ch", "Add pa 8", "Add ha 2", "Remove 3", "Done"]);
