function printAndSum(startNumber, endNumber) {
    let sum = 0;
    let sequence = "";

    for ( let i = startNumber; i <= endNumber; i++){
        sequence += i + " ";
        sum += i;
    }
    console.log(sequence.trim());
 console.log("Sum: " + sum);
}
printAndSum(50, 60);