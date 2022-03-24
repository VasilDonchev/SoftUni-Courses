function censor(text, word){
    // while (text.includes(word)) {
        
    // text = (text.replace(word, '*'.repeat(word.length)));
    // }

    let tokens = text.split(word);
    console.log(tokens.join('*'.repeat(word.length)));
}
censor('A small sentence with some small words', 'small');
console.log('- - - - - - - - - ');
censor('Find the hidden word', 'hidden');