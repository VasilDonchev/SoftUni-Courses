function specialNumb(n) {
  n = Number(n);
  let sum = 0;
  let isSpecial = false;
  for (let i = 1; i <= n; i++) {
    i = i.toString();
    for (let i = 0; i < i.length; i++) {
      sum += Number(i[i]);
    }
    if (sum == 5 || sum == 7 || sum == 11) {
      isSpecial = true;
    }
    console.log(isSpecial == true ? `${i} -> True` : `${i} -> False`);
    sum = 0;
    isSpecial = false;
  }
}
//specialNumb(20);

function specialNumb(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let stringNum = i.toString;
    while (stringNum > 0) {
      sum += stringNum % 10;
      stringNum = Math.floor(stringNum / 10);
    }
    let isSpecial;
    if (sum == 5 || sum == 7 || sum == 11) {
      isSpecial = "True";
    } else {
      isSpecial = "False";
    }
    console.log(`${i} -> ${isSpecial}`);
  }
}
specialNumb(15);
