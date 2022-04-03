function memoryGame(input){
let sequence = input.shift().split(" ").map(Number);
let moveCounter = 0;
let command = input.shift();
while (command != "end") {    
    let indexSeq = sequence.length;
    let [index1, index2] = command.split(' ').map(Number).sort((a,b) => a-b);
    moveCounter++;
    if (index1 != index2 && 
        (index1 >= 0 && index1 < indexSeq) && 
        (index2 >= 0 && index2 < indexSeq)) {
        if (sequence[index1] == sequence[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            let removed = sequence.splice(index1, 2);
        } else {
            console.log("Try again!");
        }
        if (sequence.length == 0) {
            console.log(`You have won in ${moveCounter} turns!`);
            break;
        } 
    } else {
        console.log("Invalid input! Adding additional elements to the board");
        sequence.splice(sequence.length/2, 0, `-${moveCounter}a`, `-${moveCounter}a`);
    }
    command = input.shift();
}
if (sequence.length > 0) {
    console.log(`"Sorry you lose :(
        ${sequence.join(' ')}`);
}
}
memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    )
memoryGame( [
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )
    memoryGame([
        "a 2 4 a 2 4", 
        "4 0", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
        ]
        
        )