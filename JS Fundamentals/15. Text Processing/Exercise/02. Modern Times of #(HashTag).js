function hashTag(str) {
  let strArr = str.split(" ");
  let newArr = [];
  for (let word of strArr) {
    if (word.startsWith("#") && word.length > 1) {
      word = word.substring(1);
      if (onlyLetters(word)) {
        newArr.push(word);
      }
    }
  }
  function onlyLetters(word) {
    let isTrue = false;
    for (let letter of word) {
      if (letter.toLowerCase() !== letter.toUpperCase()) {
        isTrue = true;
      } else {
        isTrue = false;
        break;
      }
    }
    if (isTrue) {
      return true;
    } else {
      return false;
    }
  }
  console.log(newArr.join("\n"));
}
hashTag("Nowadays everyone uses # to tag a #sp2cial word in #socialMedia");
hashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign #5ariously"
);
