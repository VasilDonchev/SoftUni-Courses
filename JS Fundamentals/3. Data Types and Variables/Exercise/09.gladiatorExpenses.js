function gladiatorExpenses(
    lostFightsCount,
    helmetPrice,
    swordPrice,
    shildPrice,
    armorPrice
  ) {
    let expenses = 0;
    let crash = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
      if (i % 2 == 0) {
        expenses += helmetPrice;
        crash++;
      }
      if (i % 3 == 0) {
        expenses += swordPrice;
        crash++;
      }
      if (i % 6 == 0) {
        expenses += shildPrice;
        crash++;
      }
      if (i % 12 == 0) {
        expenses += armorPrice;
      }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
  }
  gladiatorExpenses(7, 2, 3, 4, 5);
  gladiatorExpenses(23, 12.5, 21.5, 40, 200);
  