/*function factorial(number) {
    if (number <= 1) {
        return 1;
    } else {
        return number * factorial(number -1);
    }
    
}
//console.log(factorial(3));
*/
function factorial2(number) {
    return number <= 1 ? number : number *  factorial2(number - 1);
    // if (number === 0) {
    //     return 1;
    // } else {
    //     return number * factorial2(number -1);
    // }
    
}
console.log(factorial2(5));

// function fibonacci(n){
//     return n <= 1 ? n : fibonacci(n-1) + fibonacci(n - 2);
//     // if( n <= 1){
//     //     return n;
//     // } else {
//     //      return fibonacci(n-1) + fibonacci(n - 2);
//     // }
// }
// console.log(fibonacci(6));