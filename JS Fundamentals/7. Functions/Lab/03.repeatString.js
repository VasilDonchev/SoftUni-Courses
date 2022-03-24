function repeatString(str, n) {
    let result = '';
    for (let index = 0; index < n; index++) {
        result += str;
        
    }
    return result;
}

console.log(repeatString("%", 2));
//repeatString("abc", 3);
