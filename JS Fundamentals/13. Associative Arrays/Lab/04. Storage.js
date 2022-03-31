function storage(arr) {
  let stor = new Map();
  for (let line of arr) {
    line = line.split(" ");
    let name = line[0];
    let quantity = Number(line[1]);
    if (stor.has(name)) {
      let newQantity = stor.get(name) + quantity;
      stor.set(name, newQantity);
    } else {
      stor.set(name, quantity);
    }
  }
  for (let storEntry of stor) {
    console.log(`${storEntry[0]} -> ${storEntry[1]}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
