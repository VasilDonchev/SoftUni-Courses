function login(input) {
  let username = input.shift();
  let command = input.shift();
  let counter = 0;
  let password = "";

  while (username !== password) {
    for (let i = command.length - 1; i >= 0; i--) {
      password += command[i];
    }

    counter++;
    if (username === password) {
      console.log(`User ${username} logged in.`);
    } else if (counter < 4) {
      console.log("Incorrect password. Try again.");
      command = input.shift();
      password = "";
    } else {
      console.log(`User ${username} blocked!`);
      break;
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
