function bombNumbers(sequence, bomb) {
    let specialNumber = bomb[0];
    let bobmbPower = bomb[1];

    while (sequence.includes(specialNumber)) {

        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bobmbPower * 2 + 1;
        let startIndex = index - bobmbPower;

        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    let finalResult = sequence.reduce((a, b) => {
        return a + b;
    }, 0);
    console.log(finalResult);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);