function solve(input) {
  let code = input.shift();
  let line = input.shift().split(" ");
  let command = line[0];
  while (command !== "Abracadabra") {
    if (command == "Abjuration") {
      abjuration(code);
    } else if (command == "Necromancy") {
      necromancy(code);
    } else if (command == "Illusion") {
      let index = Number(line[1]);
      let letter = line[2];
      illusion(code, index, letter);
    } else if (command == "Divination") {
      let firstSubStr = line[1];
      let secondSubStr = line[2];
      divination(code, firstSubStr, secondSubStr);
    } else if (command == "Alteration") {
      let substr = line[1];
      alteration(code, substr);
    } else {
        console.log("The spell did not work!");
    }
    line = input.shift().split(" ");
    command = line[0];
  }
  function abjuration(text) {
   code = text.toUpperCase();
    console.log(code);
    return code;
  }
  function necromancy(text) {
    code = text.toLowerCase();
    console.log(code);
    return code;
  }
  function illusion(text, index, letter) {
    if (index <= text.length - 1) {
      let firstHalf = text.substring(0, index);
      let secondHalf = text.substring(index + 1);
      code = firstHalf + letter + secondHalf;
      console.log("Done!");
      return code;
    } else {
      console.log("The spell was too weak.");
    }
  }
  function divination(text, replacement, pattern) {
    //let result = "";
    if (text.includes(replacement)) {
      code = text.replaceAll(replacement, pattern);
    }
    console.log(code);
    return code;
  }
  function alteration(text, substr) {
    //let result = "";
    if (text.includes(substr)) {
      code = text.split(substr).join("");
      console.log(code);
      return code;
    }
  }
}
solve(["A7ci0", "Illusion 1 c", "Illusion 4 o", "Abjuration", "Abracadabra"]);
console.log("===============");
solve(["TR1GG3R", "Necromancy", "Illusion 8 m", "Illusion 9 n", "Abracadabra"]);
console.log("===============");
solve([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Divination SW ZV",
  "Necromancy",
  "Alteration master",
  "Abracadabra",
]);
