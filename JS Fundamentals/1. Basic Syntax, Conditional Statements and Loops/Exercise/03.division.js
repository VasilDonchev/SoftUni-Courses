function division(num) {
    let number = 1;
if (num % 10 == 0){
    number = 10;
  } else  if (num % 7 == 0){
        number = 7;
} else if(num % 6 == 0){
    number = 6;
} else if (num % 3 == 0){
    number = 3;
} else if (num % 2 == 0 ) {
    number = 2;
} 
if (number == 1) {
    console.log("Not divisible");
}else  {

    console.log(`The number is divisible by ${number}`);
}
}
division(30);
division(14);
division(12);
division(1643);