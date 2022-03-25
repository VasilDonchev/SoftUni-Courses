function inventory(input) {
  let heroes = [];

  for (const heroInfo of input) {
    let [name, level, items] = heroInfo.split(" / ");
    level = Number(level);
    items = items.split(", ");
    heroes.push({ name, level, items });
  }
  heroes.sort((a, b) => a.level - b.level);
  //console.log(heroes);

  for (const key of heroes) {
    console.log(`Hero: ${key.name}`);
    console.log(`level => ${key.level}`);
    console.log(`items => ${key.items.join(", ")}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
