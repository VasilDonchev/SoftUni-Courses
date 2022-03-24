function storeProvision(curentStocks, stocksForDelivery) {
  let storeProduckts = {};
  let currentL = curentStocks.length;
  let deliveryL = stocksForDelivery.length;

  for (let i = 0; i < currentL; i += 2) {
    let product = curentStocks[i];
    storeProduckts[product] = +curentStocks[i + 1];
  }

  for (let i = 0; i < deliveryL; i += 2) {
    let product = stocksForDelivery[i];
    if (!storeProduckts.hasOwnProperty(product)) {
      storeProduckts[product] = 0;
    }
    storeProduckts[product] += +stocksForDelivery[i + 1];
  }

            //  print variant 1
//   for (let product in storeProduckts) {
//     console.log(`${product} -> ${storeProduckts[product]}`);
//   }

            // print variant 2
let entries = Object.entries(storeProduckts);
entries.forEach(el => {
    console.log(`${el[0]} -> ${el[1]}`);
})
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
