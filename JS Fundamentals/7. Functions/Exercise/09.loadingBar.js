function loadingBar(n) {
  let str1 = "%";
  let str2 = ".";
  let resultBar = "[";
  let numberOfPercents = (n) => n / 10;
  let numberOfDots = (n) => 10 - n / 10;

  let percents = numberOfPercents(n);
  let dots = numberOfDots(n);

  for (k = 0; k < percents; k++) {
    resultBar += str1;
  }
  for (let d = 0; d < dots; d++) {
    resultBar += str2;
  }

  resultBar += "]";
  if (n == 100) {
    console.log(`100% Complete`);
    console.log(`${resultBar}`);
  } else {
    console.log(`${n}% ${resultBar}`);
    console.log("Still loading...");
  }
}
loadingBar(100);
