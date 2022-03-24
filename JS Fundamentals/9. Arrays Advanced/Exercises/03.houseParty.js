function houseParty(arr) {
  let index = 0;
  let guestComming = [];
  for (let el of arr) {
    let tokens = el.split(' ');
    let name = tokens[0];
    if (guestComming.includes(name) && tokens[2] == "going!") {
      console.log(`${name} is already in the list!`);
    } else if (guestComming.includes(name) && tokens[2] == "not") {
      index = guestComming.indexOf(name);
      guestComming.splice(index, 1);
    } else if (!guestComming.includes(name) && tokens[2] == "going!") {
      guestComming.push(name);
    } else if (!guestComming.includes(name) && tokens[2] == "not") {
      console.log(`${name} is not in the list!`);
    }
  }
  for (let iterator of guestComming) {
    console.log(iterator);
  }
}
// houseParty([
//   "Allie is going!",
//   "George is going!",
//   "John is not going!",
//   "George is not going!",
// ]);
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);