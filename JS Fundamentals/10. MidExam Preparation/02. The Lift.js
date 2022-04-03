function lift(input) {
  let tourists = Number(input[0]);
  let liftState = input[1].split(" ").map(Number);
  //console.log(liftState);
  for (let i = 0; i < liftState.length; i++) {
    let freeSpot = 4 - liftState[i];
    tourists -= freeSpot;
    liftState[i] = 4;
    if (tourists < 4) {
      i++;
      freeSpot = 4 - liftState[i];
      if (tourists > freeSpot) {
        tourists -= freeSpot;
        liftState[i] = 4;
      } else {
        liftState[i] = 4 - freeSpot + tourists;
        tourists = 0;
      }
      break;
    }
  }
  let freeSpot = liftState.length *4 - liftState.reduce((a, b) => a + b);
  if (tourists == 0 && freeSpot == 0) {
    console.log(liftState.join(" "));
  } else if (tourists == 0 && freeSpot > 0) {
    console.log(`The lift has empty spots!
      ${liftState.join(" ")}`);
  } else if (tourists > 0 && freeSpot == 0) {
    console.log(`There isn't enough space! ${tourists} people in a queue!
      ${liftState.join(" ")}`);
  }
}
lift(["0", "4 3 4"]);
