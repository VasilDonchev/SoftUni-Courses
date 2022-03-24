function _moving(input) {
  let freeSpace =
    Number(input.shift()) * Number(input.shift()) * Number(input.shift());

  let nextInput = input.shift();
  while (nextInput !== "Done" && nextInput < freeSpace) {
    freeSpace -= Number(nextInput);
    nextInput = input.shift();
  }
  if (nextInput == "Done") {
    console.log(`${freeSpace} Cubic meters left.`);
  } else {
    freeSpace -= Number(nextInput);
    console.log(
      `No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`
    );
  }
}
_moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"120"])
;
