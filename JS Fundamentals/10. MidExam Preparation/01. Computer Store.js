function solve(input) {
  let command = input.shift();
  let price = 0;
  let total = 0;
  let taxes = 0;

  while (command != "special" && command != "regular") {
      let partPrice = Number(command)
    if (partPrice < 0) {
      console.log("Invalid price!");
    } else {
      price += partPrice;
    }
    command = input.shift();
  }
  //let partsPrice = priceArr.reduce((a, b) => a + b);

  if (price == 0) {
    console.log("Invalid order!");
  } else {
    taxes = price * 0.2;
    total += price + taxes;
    if (command == "special") {
      total = total * 0.9;
    }
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${price.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${total.toFixed(2)}$
    `);
  }
}
solve(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
solve(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);

solve(["regular"]);
