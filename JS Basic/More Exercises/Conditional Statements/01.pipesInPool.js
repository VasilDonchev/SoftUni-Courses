function pipesInPool(input) {
   // let [v, p1, p2, h] = input[0].split('\n').map(Number);
  let v = Number(input[0]);
  let p1 = Number(input[1]);
  let p2 = Number(input[2]);
  let h = Number(input[3]);

  let poolFill = (p1 + p2) * h;

  if (poolFill <= v) {
    console.log(`The pool is ${((poolFill * 100) / v)}% full. Pipe 1: ${((p1 * 100) /(p1 + p2))}%. Pipe 2: ${((p2 * 100) / (p1 + p2))}%.`);
  } else {
    console.log(`For ${h} hours the pool overflows with ${(poolFill - v)} liters.`);
  }
}
pipesInPool(["100", "100", "100", "2.5"]);
