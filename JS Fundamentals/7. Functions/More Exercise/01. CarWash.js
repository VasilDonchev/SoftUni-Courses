function carWash(array) {
  let clean = 0;
  let soap = function (x) {
    return x + 10;
  };
  let water = (x) => x + x * 0.2;
  let vacuumCleaner = (x) => x + x * 0.25;
  let mud = (x) => x - x * 0.1;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "soap":
        clean = soap(clean);
        break;
      case "water":
        clean = water(clean);
        break;
      case "vacuum cleaner":
        clean = vacuumCleaner(clean);
        break;
      case "mud":
        clean = mud(clean);
        break;
    }
  }

  console.log(`The car is ${clean.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
