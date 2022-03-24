function _trainTheTrainers(input){
    let jury = Number(input.shift());
    let presentationName = input.shift();
    let presentationCounter = 0;
    let averageScore = 0;

    while (presentationName !== "Finish") {
        presentationCounter++;

        let scores = 0;
        
        for (let i = 0; i < jury; i++) {
            let element = Number(input.shift());
            scores += element;
        }
        console.log(`${presentationName} - ${(scores / jury).toFixed(2)}.`);
        presentationName = input.shift();
        averageScore += scores / jury;

    }
    console.log(`Student's final assessment is ${(averageScore / presentationCounter).toFixed(2)}.`);
}
_trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
;