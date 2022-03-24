function celsiusToFahrenheit(input) {

    //°F = °C × (9/5) + 32
    let celsius = input[0];
    let fahrenheit = celsius * (9 /5) + 32;
    console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit([-5.5])