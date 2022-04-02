function revealWords(words, template) {
    words = words.split(', ');
    for (let word of words){
        let find = "*".repeat(word.length);
        let replacedTempl = template.replace(find, word)
        template = replacedTempl;
    }
console.log(template);
}
revealWords('great',
'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');
