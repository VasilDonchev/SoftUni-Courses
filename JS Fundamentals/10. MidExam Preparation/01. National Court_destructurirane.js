function solve(input){
    let [e1, e2, e3, people] = input.mat(Number); // деструктуриране на входните данни до deklarirane na променливи  kоито приемат стойности от масив от числа
    let efficiency = e1 + e2 + e3;
    // Математическо решаване на задачата
    //calculate needed time
    let required = Math.ceil(people / efficiency);

    //calculate break time
    let pause = Math.ceil(required / 3 - 1);
    // sum result

    console.log(`Time needed: ${required + pause}h.`);
}
solve(['5','6','4','20']);