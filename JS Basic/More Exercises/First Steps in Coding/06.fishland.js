function fishland(input) {
    
    let scumria = input.shift();
    let cacaPrice = input.shift();
    let palamudQuantity = input.shift();
    let safridQuantity = input.shift();
    let musselsQuantity= input.shift();
    let palamudPrice = scumria * 1.6;
    let safridPrice = cacaPrice * 1.8;
    let musselsPrice = 7.50;
    let money = palamudPrice * palamudQuantity + safridPrice * safridQuantity + musselsPrice * musselsQuantity;

    console.log(money.toFixed(2));
    
}
fishland([6.90, 4.20, 1.5, 2.5, 1]);
fishland([5.55, 3.57, 4.3, 3.6, 7]);
fishland([7.79, 5.35, 9.3, 0, 0]);