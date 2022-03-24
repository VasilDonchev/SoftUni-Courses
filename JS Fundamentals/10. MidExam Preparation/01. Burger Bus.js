function burgerBus(arr) {
  let numberOfCityes = Number(arr.shift());
  let profit = 0;
  let totalProfit = 0;

  for (let i = 1; i <= numberOfCityes; i++) {
    let cityName = arr.shift();
    let earnedMoney = Number(arr.shift());
    let expenses = Number(arr.shift());
    if (i == 3) { //  <==(i % 3 == 0 && i % 5!= 0)
    
      profit = earnedMoney - expenses * 1.5;
      totalProfit += profit;
    } else if (i == 5) { // <==(i % 5 == 0)
        profit = earnedMoney * 0.9 - expenses;
      totalProfit += profit;
    } else {
      profit = earnedMoney - expenses;
      totalProfit += profit;
    }
    console.log(`In ${cityName} Burger Bus earned ${profit.toFixed(2)} leva.`);
  }
  console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus((["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
);
