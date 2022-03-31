function storage(arr) {
  let stor = new Map();
  for (let line of arr) {
    line = line.split(" ");
    let product = line[0];
    let quantity = Number(line[1]);
    if (stor.has(product)) {
      let newQantity = stor.get(product) + quantity;
      stor.set(product, newQantity);
    } else {
      stor.set(product, quantity);
    }
  }
  for (let storEntry of stor) {
    console.log(`${storEntry[0]} -> ${storEntry[1]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
