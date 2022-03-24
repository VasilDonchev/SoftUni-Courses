function vegetableMarket(input) {

    let euro = 1.94;
    let veg = input[0];
    let fruit = input[1];
    let vegTotal = input[2];
    let fruitTotal = input[3];
    let income = (fruit*fruitTotal + veg*vegTotal) * euro;
    console.log(income.toFixed(2));


}
vegetableMarket([0.194, 19.4,   10,    10    ])