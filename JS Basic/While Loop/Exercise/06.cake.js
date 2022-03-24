function _cake(input){
    let allPicesOfCake = Number(input.shift() * Number(input.shift()));

    let nextInput = input.shift();
    while (nextInput != "STOP" && nextInput < allPicesOfCake) {
        allPicesOfCake-= Number(nextInput);
        nextInput = input.shift();
    }
    if (nextInput == "STOP") {
        console.log(`${allPicesOfCake} pieces are left.`);
    } else {
        allPicesOfCake-= Number(nextInput);
        console.log(`No more cake left! You need ${Math.abs(allPicesOfCake)} pieces more.`);
    }

}
_cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

