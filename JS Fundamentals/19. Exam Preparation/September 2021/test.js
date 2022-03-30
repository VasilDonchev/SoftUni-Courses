let key = "abcdefghijklmnopqrstuvwxyz";

function solve(text, startIndex, count) {
    let substring = text.substring(startIndex, startIndex + count)
    let newArr = text.split(substring)
    substring = substring.toUpperCase()
    text = newArr[0] + substring + newArr[1]
    

    console.log(text);
}
//solve("refrigiratorecrematore", 3, 11);
function slice(a, b) {
    let removeStr = key.split("").splice(a, b - a).join("");
    key =  key.split(removeStr);
       
       return  key.join("");
   }
   slice(2,6)