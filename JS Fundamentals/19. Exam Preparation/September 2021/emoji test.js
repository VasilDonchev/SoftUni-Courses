console.log('Hello');

function emojiDetector(arr) {
    let text = arr[0];
    let digitRegExp = /\d/g;
    let digits = text.match(digitRegExp);
    let treshold = 1;
    digits.map((d) => treshold *= Number(d));
    console.log(`Cool threshold: ${treshold}`);
}
emojiDetector[("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")];