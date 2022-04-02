function furniture(arr) {
  let furnitureRegExp = /(?<item>[A-Z]+[a-z]*)/g;
  let itemRegExp = />{2}[A-Z]{1,}[a-z]*<{2}/;
  let priceRegExp = /(\d+[^!]\d+)/g;
  let quantityRegExp = /[!](?<quantity>\d+)/g;
  let validRegexp = />{2}(?<item>[A-Z]+[a-z]*)<{2}(?<price>\d+\.\d+)[!](?<quantity>\d+)/

  let tokens = arr.shift();
  let command = tokens.match(furnitureRegExp).toString();
  let items = [];
  let money = 0;
  let totalPrice = 0;

  while (command !== "Purchase") {
    let validItem = itemRegExp.test(tokens);
    let validPrice = priceRegExp.test(tokens);
    let validQuantity = quantityRegExp.test(tokens);
    let validPurchase = validRegexp.test(tokens);
    if (validItem && validPrice && validQuantity) {

      let price = tokens.match(priceRegExp).map(Number);
      let quantity = tokens.match(quantityRegExp).toString().substring(1);

      items.push(command);

      money = price[0] * Number(quantity);
      totalPrice += money;
    }
    tokens = arr.shift();
    command = tokens.match(furnitureRegExp).join("");
  }
  console.log("Bought furniture:");
  for (let el of items) {
    console.log(el);
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);