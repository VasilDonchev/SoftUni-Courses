function printStars(count) {
console.log('*'.repeat(count));
}
//printStars(5)

function printNumbers(start = 0, end = 10){
    for (let i = start; i <= end; i++){
        console.log(i);
    }
}
printNumbers();
printNumbers(2);
printNumbers(2,3);