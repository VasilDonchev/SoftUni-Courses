function solve(word, text) {
  let arrText = text.split(" ");
  for (let el of arrText) {
    if (el.toLowerCase() === word.toLowerCase()) {
      console.log(word);
      return;
    }
  }
  console.log(`${word} not found!`);
}
solve("pyton", "JavaScript is the best programming javaScript language");
