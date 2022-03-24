function pointValidation(arr) {
  let x1 = Number(arr[0]);
  let y1 = Number(arr[1]);
  let x2 = Number(arr[2]);
  let y2 = Number(arr[3]);
  let x0 = 0;
  let y0 = 0;

  function chekDistance(a, b, c, d) {
    distance = Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2), 2);
    return distance;
  }
  if (Number.isInteger(chekDistance(x1, y1, x0, y0))) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (Number.isInteger(chekDistance(x2, y2, 0, 0))) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (Number.isInteger(chekDistance(x1, y1, x2, y2))) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
pointValidation([3, 0, 0, 4]);
