function pascalCaseSpliter(input){
    let pascalCaseArr = [];
    let i = 1;
    let currentWord='';
    currentWord+=input[0];
    let nextChar = input[i]
    while(nextChar != .toUpperCase())  {
    //let currChar = input[i+1] 
        currentWord+=input[i];
        i++
        nextChar = input[i];
    }
    pascalCaseArr.push(currentWord)     
    
}
//console.log(pascalCaseArr.join(', '));

pascalCaseSpliter('HoldTheDoor');