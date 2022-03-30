function emojiDetector(arr) {
  let text = arr[0];
  let emojiRegExp = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
  let digitRegExp = /\d/g;

  let digits = text.match(digitRegExp);
  let treshold = 1;
  digits.map(d => treshold *= Number(d));
  console.log(`Cool threshold: ${treshold}`);

  let validEmoji;
  let coolEmoji = [];
  while ((validEmoji = emojiRegExp.exec(text))) {
    coolEmoji.push(validEmoji);
  }
  console.log(
    `${coolEmoji.length} emojis found in the text. The cool ones are:`
    );
    
    for (let emoji of coolEmoji) {
      let emojiName = emoji[2];
      let fullEmoji = emoji[0];
      let coolnes = 0;
    for (let el of emojiName) {
      coolnes += el.charCodeAt();
    }
    if (coolnes > treshold) {
      console.log(fullEmoji);
    }
  }
}

emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);
