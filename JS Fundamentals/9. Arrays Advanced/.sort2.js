function demo() {
    let arr = [5, 10, 1, -15, 0];
    let sortedArr = arr.sort((a, b) => {
        return a - b; // сравнява а и b и слага по-малкото в ляво (ascending order)
        return b - a; //сравнява а и b и слага по-голямото от лявата страна (descending order)
    });
    let winners = sortedArr.slice(0, 3);
    console.log(sortedArr);
    console.log(winners);

    let arrStrings = ['b', "ccc", 'aa'];
    let sortedStrings = arrStrings.sort((a, b) => {
        return a.localeCompare(b); // ascending alfabeticali
        return b.localeCompare(a); // descending alfabeticali
    });
    console.log(sortedStrings);
    let arrStrings2 = ['bbb', "ccc", 'aaa'];
    let sortedArrStrings = arrStrings2.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sortedArrStrings);

    let numbers = [20, 40, 10, 30, 100, 5];
    let sortedNumbers = numbers.sort((a, b) => {
        return a-b;
    }); 
    numbers.sort(); // Unexpected result on arrays of numbers!
    console.log(sortedNumbers);
    console.log(numbers); // [10,100,20,30,40,5]

}
demo()