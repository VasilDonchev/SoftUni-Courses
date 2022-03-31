function solve(arr) {
  let parkingLot = {};
  for (let line of arr) {
    let [direction, carNumber] = line.split(", ");
    if (direction == "IN") {
      parkingLot[carNumber] = direction;
    } else if (direction == "OUT") {
      if (parkingLot.hasOwnProperty(carNumber)) {
        delete parkingLot[carNumber];
      }
    }
  }
  let parkingLotArr = Object.keys(parkingLot);

  if (parkingLotArr.length == 0) {
    console.log("Parking Lot is Empty");
  } else {
    parkingLotArr.sort((a, b) => a.localeCompare(b));
    for (let car of parkingLotArr) {
      console.log(car);
    }
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
