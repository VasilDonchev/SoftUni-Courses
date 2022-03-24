function bunnyKill(arr) {
  let bombs = arr.pop().split(" ");
  console.log(bombs);
  for (let index = 0; index < arr.length; index++) {
    let el = arr.shift().split(" ").map(Number);
    arr.push(el);
  }
  for (let el of bombs) {
    [x, y] = el.split(',').map(Number);
    let bomb = arr[x][y];
    if (bomb > 0 && (x != 0 && y != 0)) {
      arr[x-1][y-1] -= bomb;
      arr[x][y-1] -= bomb;
      arr[x+1][y-1] -= bomb;
      arr[x-1][y] -= bomb;
      arr[x][y] -= bomb;
      arr[x+1][y] -= bomb;
      arr[x-1][y+1] -= bomb;
      arr[x][y+1] -= bomb;
      arr[x+1][y+1] -= bomb;

    // } else if (bomb > 0 && (x == 0 && y > 0 ) {
      
    // }{
      
    }
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
