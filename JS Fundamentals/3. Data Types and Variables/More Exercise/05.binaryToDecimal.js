function binaryToDecimal(binaryNumber) {
    //binaryNumber = binaryNumber.toString();
let sum = 0;
for (let i = 0; i < binaryNumber.length; i++ ) {
    sum = sum * 2 + Number(binaryNumber[i]); 
}
console.log(sum);
}
binaryToDecimal(00001001);