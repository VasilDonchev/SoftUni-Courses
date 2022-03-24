function sumOfOddNumbers(odd){
    let sum = 0;
    let oddNumbers = 1;
    for (i = 1; i <= odd; i++){
        console.log(oddNumbers);
        sum +=oddNumbers;
        oddNumbers+=2
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)