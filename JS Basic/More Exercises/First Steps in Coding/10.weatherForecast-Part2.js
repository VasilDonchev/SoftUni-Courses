function weatherForecast(input) {
  let command = input[0];

  if (command >= 5.0 && command <= 11.9) {
    console.log("Cold");
  } else if (command >= 12.0 && command <= 14.9) {
    console.log("Cool");
  } else if (command >= 15.0 && command <= 20.0) {
    console.log("Mild");
  } else if (command >= 20.1 && command <= 25.9) {
    console.log("Warm");
  } else if (command >= 26 && command <= 35.0) {
    console.log("Hot");
  } else {
    console.log("unknown");
  }
}
weatherForecast([26]);
