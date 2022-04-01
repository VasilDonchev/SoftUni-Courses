function cardGame(strArr) {
  let players = {};
  for (let line of strArr) {
    let [playerName, cards] = line.split(": ");

    if (!players.hasOwnProperty(playerName)) {
      players[playerName] = [];
    }
    cards = cards.split(", ");
    for (let card of cards) {
      if (!players[playerName].includes(card)) {
        players[playerName].push(card);
      }
    }
  }

  let calculation = Object.entries(players);
  for (let i = 0; i < calculation.length; i++) {
    let playerName = calculation[i][0];
    let playerCards = calculation[i][1];

    console.log(`${playerName}: ${valueCalculator(playerCards)}`);
}

// function to calculate value of any player cards
function valueCalculator(cards) {
    let sum = 0;
    for (let currentCard of cards) {
        currentCard = currentCard.split("");
        let power = currentCard[0];
        let type = currentCard.pop();
        
        if (power === "J") {
            power = 11;
        } else if (power === "Q") {
            power = 12;
        } else if (power === "K") {
            power = 13;
        } else if (power === "A") {
            power = 14;
        } else if (power === '1') {
            power = 10;
        }
        if (type === "C") {
            sum += Number(power) * 1;
        } else if (type === "D") {
            sum += Number(power) * 2;
        } else if (type === "H") {
            sum += Number(power) * 3;
        } else if (type === "S") {
            sum += Number(power) * 4;
        }
    }
    return sum;
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
console.log('====');
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    )
