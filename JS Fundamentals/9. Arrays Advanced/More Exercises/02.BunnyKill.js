function bunnyKill(arr) {
  let bombs = arr.pop().split(" ");
  console.log(bombs);
  for (let index = 0; index < arr.length; index++) {
    let el = arr.shift().split(" ");
    arr.push(el);
  }
  
  console.log(arr);
}
bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1",
]);
