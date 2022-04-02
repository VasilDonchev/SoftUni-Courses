function onlyLetters(word) {
  let currWord;
  let restWord = word.substring(1);
  let output = [];
  for (let l of word) {
    if (l === l.toUpperCase()) {
      currWord = l;
    }
    while (l !== l.toUpperCase()) {
      currWord += l;
    }
    output.push(currWord);
  }
  console.log(output);
}

onlyLetters("FiVe");
