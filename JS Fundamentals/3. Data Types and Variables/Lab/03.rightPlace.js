function rightPlace(str, char, result) {
    let tempStr = "";

    for ( let i = 0; i < str.length; i++) {
        if (str[i] == "_") {
            tempStr += char;
        } else {
            tempStr+= str[i];
        }

    }
    if (tempStr === result) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'String')