function vacation(input) {
  let vacationMoney = Number(input[0]);
  let currentMoney = Number(input[1]);
  let daysOfSpend = 0;
  let allDays = 0;
  let index = 1;

  while (currentMoney < vacationMoney) {
    let action = input[index + 1];
    let money = Number(input[index + 2]);
    if (action == "spend") {
      currentMoney -= money;
      daysOfSpend++;
      if (currentMoney < 0) {
        currentMoney = 0;
      }
    } else {
      currentMoney += money;
      daysOfSpend = 0;
    }
    allDays++;
    index += 2;
    if (daysOfSpend == 5) {
      break;
    }
  }
  if (daysOfSpend == 5) {
    console.log(`You can't save the money.`);
    console.log(`${allDays}`);
  } else {
    console.log(`You saved the money for ${allDays} days.`);
  }
}
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);
