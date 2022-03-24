function orders(product, quantity) {
  let coffeePrice = 1.5;
  let waterPrice = 1.0;
  let cokePrice = 1.4;
  let snacksPrice = 2.0;
  let totalPrice = 0;
  let calculateTotakIfCoffee = () => quantity * coffeePrice; // arrow function

  switch (product) {
    case "coffee":
      // finalPrice += coffeePrice * quantity;
      totalPrice = calculateTotakIfCoffee(); // arrow function
      break;
    case "water":
      totalPrice += waterPrice * quantity;
      break;
    case "coke":
      totalPrice += cokePrice * quantity;
      break;
    case "snacks":
      totalPrice += snacksPrice * quantity;
      break;

}
return totalPrice.toFixed(2);
}
console.log(orders("coffee", 2));