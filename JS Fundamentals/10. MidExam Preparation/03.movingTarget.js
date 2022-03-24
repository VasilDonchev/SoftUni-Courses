function movingTarget(arr) {
  let sequence = arr.shift().split(" ").map(Number);
  // console.log(sequence);
  let command = arr.shift().split(" ");

  function shoot(a, b) {
    return (sequence[a] -= b);
  }
  function strike(a, b) {
    sequence.splice(a - b, a + b);
  }
  function add(a, b) {
    sequence.splice(a, 0, b);
  }

  while (command[0] !== "End") {
    let index = Number(command[1]);
    switch (command[0]) {
      case "Shoot":
        if (index < sequence.length){
            let power = Number(command[2]);
            shoot(index, power);

            if (sequence[index] <= 0) {
              let delElement = sequence.splice(index, 1);
            }
        }
        command = arr.shift().split(" ");
        break;
      case "Strike":
        let radius = Number(command[2]);
        if (index - radius >= 0 && index + radius < sequence.length) {
          strike(index, radius);
          command = arr.shift().split(" ");
        } else {
          console.log("Strike missed!");
          command = arr.shift().split(" ");
        }
        break;
      case "Add":
        if (index < sequence.length) {
          let value = Number(command[2]);
          add(index, value);
          command = arr.shift().split(" ");
        } else {
          console.log("Invalid placement!");
          command = arr.shift().split(" ");
        }
        break;
    }
  }
  console.log(sequence.join("|"));
}
//movingTarget([
//   "52 74 23 44 96 110",
//   "Shoot 7 10",
//   "Shoot 1 80",
//   "Strike 2 1",
//   "Add 22 3",
//   "End",
// ]);

movingTarget(["1 2 3 4 5", "Strike 2 1", "End"]);
