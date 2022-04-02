function race(input) {
  let names = input.shift().split(", ");
  let raceObj = {};

  for (let name of names) {
    raceObj[name] = 0;
  }
  let tokens = input.shift();
  let namesPattern = /[A-Za-z]/g;
  let numbersPatern = /\d/g;
  let currName;
  let currDistance;

  while (tokens != "end of race") {
    currName = tokens.match(namesPattern).join("");
    currDistance = tokens
      .match(numbersPatern)
      .reduce((a, b) => Number(a) + Number(b));
    if (raceObj.hasOwnProperty(currName)) {
      raceObj[currName] += currDistance;
    }
    tokens = input.shift();
  }
  let result = Object.entries(raceObj);
  result.sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${result[0][0]}
  2nd place: ${result[1][0]}
  3rd place: ${result[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
