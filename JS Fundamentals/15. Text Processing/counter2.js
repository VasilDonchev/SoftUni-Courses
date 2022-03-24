function solve(text, word){
    let count = 0;
    let index = 0;

    while (text.indexOf(word, index) != 1){
        count++;
        index = text.indexOf(word, index) + 1;
    }
    "230948573982049845".slice(-4).padStart(23, '*');
    '**************9845'
}
countStringOccurences('This is a word and it also is a sentence', 'is');
countStringOccurences('softuni is great place for learning new programming languages',
'softuni'
);