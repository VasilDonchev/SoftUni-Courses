function chessBoard(n) {
  let k = 1;

  console.log('<div class="chessboard">');
  while (k <= n) {
    console.log("  <div>");
    for (let i = 1; i <= n; i++) {
      if (i % 2 != 0) {
        console.log('    <span class="black"></span>');
      } else {
        console.log('    <span class="white"></span>');
      }
    }
    console.log("  </div>");
    k++;
    if (k > n) {
      break;
    }
    console.log("  <div>");
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        console.log('    <span class="black"></span>');
      } else {
        console.log('    <span class="white"></span>');
      }
    }
    console.log("  </div>");
    k++;
  }
  console.log("</div>");
}
chessBoard(6);