function _coins(input) {
  let change = Number(input[0]);
  let coin = 0;

  while (change > 0) {
    change = change.toPrecision(3);
    if (change >= 2) {
      change -= 2;
      coin++;
    // } else if (change >= 2) {
    //     change -= 2;
    //     coin++;
    } else if (change >= 1) {
        change -= 1;
        coin++;
    } else if (change >= 0.50) {
        change -= 0.50;
        coin++;
    } else if (change >= 0.20) {
        change-= 0.20;
        coin++;
    } else if (change >= 0.10) {
        change -= 0.10;
        coin++;
    } else if (change >= 0.05) {
        change -= 0.05;
        coin++;
    } else if (change >= 0.02) {
        change -= 0.02;
        coin++;
    } else {
        change -= 0.01;
        coin++;
    
    }
  }
  console.log(coin);
}
_coins(["2.73"])
