function pirates(input) {
  let cities = {};
  let [townName, townPopulation, townGold] = input.shift().split("||");
  while (townName != "Sail") {
    if (!cities[townName]) {
      cities[townName] = {
        population: 0,
        gold: 0,
      };
    }
    cities[townName].population += Number(townPopulation);
    cities[townName].gold += Number(townGold);
       [townName, townPopulation, townGold] = input.shift().split("||");
  }

  let [command, currentTown, ar1, ar2] = input.shift().split("=>");
  while (command != "End") {
    if (command === "Plunder") {
      cities[currentTown].population -= Number(ar1);
      cities[currentTown].gold -= Number(ar2);
      console.log(
        `${currentTown} plundered! ${ar2} gold stolen, ${ar1} citizens killed.`
      );
      if (
        cities[currentTown].population <= 0 ||
        cities[currentTown].gold <= 0
      ) {
        delete cities[currentTown];
        console.log(`${currentTown} has been wiped off the map!`);
      }
    }
    if (command === "Prosper") {
      if (Number(ar1) < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        cities[currentTown].gold += Number(ar1);
        console.log(
          `${ar1} gold added to the city treasury. ${currentTown} now has ${cities[currentTown].gold} gold.`
        );
      }
    }
    [command, currentTown, ar1, ar2] = input.shift().split("=>");
  }
  let cityNames = Object.entries(cities);

  if (cityNames.length == 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    // cityNames.sort((townA, townB) => {
    //   let townAName = townA[0];
    //   let townBName = townB[0];
    //   let townAProperties = townA[1];
    //   let townBProperties = townB[1];

    //   if (townAProperties.gold != townBProperties.gold) {
    //     return townBProperties.gold - townAProperties.gold;
    //   } else {
    //     return townAName.localeCompare(townBName);
    //   }
    // });
    console.log(
      `Ahoy, Captain! There are ${cityNames.length} wealthy settlements to go to:`
    );
    for (let [key, value] of cityNames) {
      let currentTownName = key;
      let currentTownPopulation = value.population;
      let currentTownGold = value.gold;
      console.log(
        `${currentTownName} -> Population: ${currentTownPopulation} citizens, Gold: ${currentTownGold} kg`
      );
    }
  }
}
// pirates([
//   "Tortuga||345000||1250",
//   "Santo Domingo||240000||630",
//   "Havana||410000||1100",
//   "Sail",
//   "Plunder=>Tortuga=>75000=>380",
//   "Prosper=>Santo Domingo=>180",
//   "End",
// ]);
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

