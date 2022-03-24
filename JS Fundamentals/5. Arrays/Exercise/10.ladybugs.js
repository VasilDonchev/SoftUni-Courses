function ladybugs(input) {
  let n = input.shift();
  let field = new Array(n).fill(0);
  let ladyBugIndexes = input.shift().split(" ");
  for (let index of ladyBugIndexes) {
    index = Number(index);
    if (index >= 0 && index < n) {
      field[index] = 1;
    }
  }
for (const command of input) {
    let tokens = command.split(' ');
    let currentIndex = Number(tokens[0]);
    let direction = tokens[1];
    let offset = Number(tokens[2]);
}
  console.log(field);
  let ladybugMove = input.shift().split(" ");
}
ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
