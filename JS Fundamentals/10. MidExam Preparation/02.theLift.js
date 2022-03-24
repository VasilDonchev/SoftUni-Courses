function theLift(arr) {
  let queue = Number(arr[0]);
  let wagons = arr[1].split(" ").map(Number);
  
  for (let i = 0; i < wagons.length; i++) {
    let currentWagon = wagons[i];
    while (currentWagon < 4 && queue > 0) {
      currentWagon += 1;
      queue -= 1;
    }
    wagons[i] = currentWagon;
  }
  if (queue == 0 && wagons[wagons.length-1] == 4) {
    console.log(wagons.join(" "));
  } else if (queue == 0){
    console.log(`The lift has empty spots!
    ${wagons.join(" ")}
    `);
  } 
  if (queue > 0) {
      console.log(`There isn't enough space! ${queue} people in a queue!
      ${wagons.join(" ")}`);
  }
}

theLift(["2", "4 2 4 4"]);
