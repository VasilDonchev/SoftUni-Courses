function oddOccurences(inputStr) {
    let wordsObj = new Map();
    let words = inputStr.split(" ");
    let output = [];

    for (let word of words) {
        word = word.toLowerCase();
        if (wordsObj.has(word)) {
            let newValue = wordsObj.get(word) + 1;
            wordsObj.set(word, newValue);
        } else {
            wordsObj.set(word, 1);
        }

    }

    for (let [name, value] of wordsObj.entries()) {
        if (value % 2 == 1) {
            output.push(name);
        }
    }

    console.log(output.join(" "));
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');``