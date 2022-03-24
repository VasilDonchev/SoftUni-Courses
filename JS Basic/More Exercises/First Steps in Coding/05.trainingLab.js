function trainingLab(input) {
    let w = input[0] * 100;
    let h = (input[1] * 100) - 100;
    let wNumb1 = Math.trunc(w /120); //  + (w % 120);
    let hNumb1 = Math.trunc(h /70) ;// + (h % 70);

console.log(wNumb1 * hNumb1 - 3);
}
trainingLab([9.9, 0.29])