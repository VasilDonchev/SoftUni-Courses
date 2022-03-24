function arrayManipulations(commands) {
  let arr = commands.shift().split(" ").map(Number);

  function add(el) {
    return arr.push(el);
  }

  function remove(num) {
    arr = arr.filter((el) => el !== num);
  }

  function removeAt(index) {
    arr.splice(index, 1);
  }

  function insert(number, index) {
    arr.splice(index, 0, number);
  }
  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(" ");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (command === "Add") {
      add(firstNum);
    }
    if (command === "Remove") {
      remove(firstNum);
    }
    if (command === "RemoveAt") {
      removeAt(firstNum, secondNum);
    }
    if (command === "Insert") {
      insert(firstNum, secondNum);
    }
  }
  console.log(arr.join(" "));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
