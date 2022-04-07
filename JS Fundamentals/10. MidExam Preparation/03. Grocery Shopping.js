function groceryShopping(input) {
  let sequence = input.shift().split("|");
  let tokens = input.shift().split("%");
  let command = tokens[0];
  //console.log(sequence);

  while (command != "Shop!") {

    if (tokens[0] == "Important") {
      let product = tokens[1];
      if (sequence.includes(product)) {
        let index = sequence.indexOf(product);
        let important = sequence.splice(index, 1);
        let newArr = sequence.filter((x) => x.indexOf() != index);
        newArr.unshift(important[0]);
        sequence = newArr.slice(0);
      } else {
        sequence.unshift(product);
      }

    } else if (tokens[0] == "Add") {
      let product = tokens[1];
      if (sequence.includes(product)) {
        console.log("The product is already in the list.");
      } else {
        sequence.push(product);
      }

    } else if (tokens[0] == "Swap") {
      let index1 = sequence.indexOf(tokens[1]);
      let index2 = sequence.indexOf(tokens[2]);
      let product1 = tokens[1];
      let product2 = tokens[2];
      if (sequence.includes(tokens[1]) && sequence.includes(tokens[2])) {
        sequence[index1] = sequence[index2];
        sequence[index2] = product1;
      } else if (sequence.includes(tokens[1])) {
        console.log(`Product ${product2} missing!`);
      } else {
        console.log(`Product ${product1} missing!`);
      }

    } else if (tokens[0] == "Remove") {
      let product = tokens[1];
      if (sequence.includes(tokens[1])) {
        let newArr = sequence.filter((x) => x != product);
        sequence = newArr.slice(0);
      } else {
        console.log(`Product ${product} isn't in the list.`);
      }

    } else if (tokens[0] == "Reversed") {
      let result = sequence.reverse();
      sequence = result.slice(0);
    }
    tokens = input.shift().split("%");
    command = tokens[0];
  }
  for (let i = 0; i < sequence.length;i++){

      console.log(`${i+1}. ${sequence[i]}`);
  }
}
groceryShopping(["kiwi|paper|coffee",
"Add%coffee",
"Important%bread",
'Reversed',
"Shop!"])
