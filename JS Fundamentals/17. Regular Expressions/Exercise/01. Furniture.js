function furniture(arr) {
  let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/;
  let items = [];
  let totalPrice = 0;

  while (arr[0] !== "Purchase") {
    let line = arr.shift();
    let match = pattern.exec(line);
    if (match != null) {
      let { name, price, qty } = match.groups;
      price = Number(price);
      qty = Number(qty);
      totalPrice += price * qty;
      items.push(name);
    }
  }
  console.log("Bought furniture:");
  for (let el of items) {
    console.log(el);
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
