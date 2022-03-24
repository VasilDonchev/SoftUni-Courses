function lastKNumbersSequance(n, k) {
  let sequence = [1];
  // repeat n-1 times
  while (sequence.length < n) {
    // - take last k elements
    let lastK = sequence.slice(-k);

    // -sum elements
    let sum = 0;
    for (let el of lastK) {
      //  -add sium to sequence
      sum += el;
    }
    sequence.push(sum);
    // console.log(sum);
  }
  console.log(sequence.join(" "));
}
lastKNumbersSequance(8, 2);
