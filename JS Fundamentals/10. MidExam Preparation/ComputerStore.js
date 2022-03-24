function computerStore(arr) {
  let command = arr.shift();
  let currentPrice = 0;
  let taxes = 0;
  let totalPrice = 0;

  while (command !== "special" && command !== "regular") {
    if (Number(command) >= 0) {
      currentPrice += Number(command);
    } else {
      console.log("Invalid price!");
    }
    //console.log(currentPrice);
    command = arr.shift();
  }
  if (currentPrice > 0) {
    taxes = currentPrice * 0.2;
    totalPrice += currentPrice + taxes;
    if (command === "special") {
      totalPrice *= 0.9;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${currentPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
  } else {
    console.log("Invalid order!");
  }
}
computerStore([
  "0",
  "0",
  "0",
  "regular",
]);
