function gladiatorInvertory(arr) {
  let inventory = arr.shift().split(" ");

  for (let el of arr) {
    el.split(" ");
    [command, equipment] = el.split(" ");
    if (command == "Buy") {
      if (!inventory.includes(equipment)) {
        inventory.push(equipment);
      }
    } else if (command == "Trash") {
      if (inventory.includes(equipment)) {
        inventory.splice(inventory.indexOf(equipment), 1);
      }
    } else if (command == "Repair") {
      if (inventory.includes(equipment)) {
        inventory.splice(inventory.indexOf(equipment), 1);
        inventory.push(equipment);
      }
    } else if (command == "Upgrade") {
      [equipment, upgrade] = equipment.split("-");
      if (inventory.includes(equipment)) {
        let newWeapon = `${equipment}:${upgrade}`;
        let index = inventory.indexOf(equipment);
        inventory.splice(index + 1, 0, newWeapon);
      }
    }
  }
  console.log(inventory.join(" "));
}

gladiatorInvertory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Bay Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInvertory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
