function bitcoinMining(arry) {
  let count = 0;
  let day = 0;
  let firstDay = 0;
  let money = 0;
  let length = arry.length;
  let bitcoinPrice = 11949.16;

  for (let index = 0; index < length; index++) {
    day++;
    let goldExtraction = arry.shift();
    if (day % 3 == 0) {
      goldExtraction -= goldExtraction * 0.3;
    }

    money += goldExtraction * 67.51;
    while (money >= bitcoinPrice) {
      if (firstDay === 0) {
        firstDay = day;
      }
      count++;
      money -= bitcoinPrice;
    }
  }

  console.log(`Bought bitcoins: ${count}`);
  if (count >= 1) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);
