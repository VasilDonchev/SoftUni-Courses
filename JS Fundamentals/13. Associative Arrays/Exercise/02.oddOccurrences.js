function solve(input) {
  // convert input to array
  let words = input.toLowerCase().split(" ");
  let result = new Map();

  // for every element of input array
  for (let word of words) {
    if (result.has(word)) {
      let currentCoun = result.get(word);
      result.set(word, currentCoun + 1);
    } else {
      result.set(word, 1);
    }
  }
  let sortedWords = Array.from(result.entries()).filter((x) => x[1] % 2 != 0);

  let output = [];
  for (let [word, count] of sortedWords) {
    output.push(word);
  }
  console.log(output.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");
