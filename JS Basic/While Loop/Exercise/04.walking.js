function walking(input) {
  let walk = input.shift();
  let counter = 0;
  const goal = 10000;

  while (walk !== "Going home" && counter < goal) {
    let start = Number(walk);
    walk = input.shift();
    counter += start;
    // if (counter >= goal) {
    //     break;
    //}
  }
  if (walk == "Going home") {
    counter += Number(input.shift());
  }
  
  if (counter < goal) {
    console.log(`${goal - counter} more steps to reach goal.`);
  } else {
    console.log(`Goal reached! Good job!`);
    console.log(`${counter - goal} steps over the goal!`);

  }
}
walking(["1000",
"1500",
"2000",
"6500"])

;
