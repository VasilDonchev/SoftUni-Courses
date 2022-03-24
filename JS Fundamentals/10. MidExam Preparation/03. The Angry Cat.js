function angryCat(arr, entryPoint, value) {
  let rightSide = arr.slice(entryPoint + 1);
  let leftSide = arr.slice(0, entryPoint);
  let sum = 0;
  let leftSum = 0;
  let rightSum = 0;
  let position = "";
  //let cheap = x =>
  for (let el of leftSide) {
    switch (value) {
      case "cheap":
        if (Number(el) < arr[entryPoint]) {
          leftSum += Number(el);
        }
        break;
      case "expensive":
        if (Number(el) >= arr[entryPoint]) {
          leftSum += Number(el);
        }
    }
  }

  for (let el of rightSide) {
    switch (value) {
      case "cheap":
        if (Number(el) < arr[entryPoint]) {
          rightSum += Number(el);
        }
        break;
      case "expensive":
        if (Number(el) > arr[entryPoint]) {
          rightSum += Number(el);
        }
    }
  }
  if (leftSum >= rightSum) {
    position = "Left";
    sum += leftSum;
  } else {
    position = "Right";
    sum += rightSum;
  }
  console.log(`${position} - ${sum}`);
}
// angryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
// angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
angryCat([7, 5, 7], 2, "expensive")