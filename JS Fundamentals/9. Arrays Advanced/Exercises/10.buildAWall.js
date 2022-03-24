function buildAWall(arr) {
  let numberOfCrew = arr.length;
  let amountOfConcrete = 0;
  let totalAmound = [];
  let concretePrice = 1900;
  let totalPrice = 0;
  let daysToFinishBuild = 30 - Math.min(...arr);
  for (let index = 0; index < daysToFinishBuild; index++) {
    for (let i = 0; i < numberOfCrew; i++) {
      if (arr[i] < 30) {
        amountOfConcrete += 195;
        arr[i]++;
      }
    }
    totalAmound.push(amountOfConcrete);
    amountOfConcrete = 0;
  }
  totalPrice = totalAmound.reduce((a, b) => a + b) * concretePrice;
  console.log(totalAmound.join(", "));
  console.log(`${totalPrice} pesos`);
}
buildAWall([21, 25, 28]);
