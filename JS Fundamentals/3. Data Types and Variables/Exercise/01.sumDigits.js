function sumDigits(num) {
     let sumOfDigits = 0;
     num = num.toString();         // числото към стринг

    //  for(let char of num) {     //   обхождаме стринга и добавяме Number(string) към sum
    //      sum += Number(char);   // в sum получаваме сумата от числата в стринга
    //  } 

    // num.split("").map(function (char) {sum += Number(char);});
    
    num.split("").forEach(function (char) {sumOfDigits += Number(char);});
     console.log(sumOfDigits);
}
sumDigits(543)