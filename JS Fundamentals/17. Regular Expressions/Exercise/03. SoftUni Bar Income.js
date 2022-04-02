function barIncome(arr) {
  let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
  let totalIncome = 0;
  while (arr[0] != "end of shift") {
    let line = arr.shift();
    let match = pattern.exec(line);
    // console.log(match);
    if (match != null) {
      let [_, customer, product, count, price] = match;
      let spend = Number(count) * Number(price);
      totalIncome += spend;

      console.log(`${customer}: ${product} - ${spend.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
barIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
