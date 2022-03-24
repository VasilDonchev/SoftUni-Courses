function countStringOccurences(text, word){

    let tokens = text.split(' ');
    let counter = 0;
    counter = tokens.filter(x => x == word);

    // for ( let token of tokens){
    //     if (token == word){
    //         counter ++;
    //     }
    // }
    console.log(counter);
}
countStringOccurences('This is a word and it also is a sentence', 'is');
countStringOccurences('softuni is great place for learning new programming languages',
'softuni'
);