function swimChamp(input) {
  let champDuration = Number(input.shift());
  let minPoints = Number(input.shift());
  let swimmersCount = Number(input.shift());
  let hotelRoomPrice = Number(input.shift());
  let participationFee = Number(input.shift());
  let pointsToEarn = [...input].map(Number);

  let currentDay = 1;
  let expenses = participationFee * swimmersCount;
  let currentPoints = 0;
  let currenHhotelFee = 0;

  for (let i = 0; i < champDuration; i++) {
    currentPoints += pointsToEarn[i];
    if (currentDay > 1) {
      currentPoints += pointsToEarn[i - 1] * 0.05;
    }
    expenses += swimmersCount * hotelRoomPrice;
    currentDay++;
  }
  if (currentPoints >= minPoints) {
    expenses -= expenses * 0.25;
    console.log(`Money left to pay: ${expenses.toFixed(2)} BGN.`);
    console.log("The championship was successful!");
  } else {
    expenses -= expenses * 0.1;
    console.log(`Money left to pay: ${expenses.toFixed(2)} BGN.`);
    console.log("The championship was not successful.");
  }
}
swimChamp(["3", "400", "5", "70.6", "15.0", "100.6", "300.59", "250.9"]);
swimChamp(["2", "600", "3", "100.8", "50.5", "100.68", "80.1"]);
swimChamp(["3", "500", "5", "100.9", "50.1", "100.5", "301.0", "80.0"]);
