function arrayManipulator(numbers, commands) {

    for (let command of commands) {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];
        let index = Number(tokens[1]);

        switch (currentCommand) {
            case 'add':
                let element = +tokens[2];
                numbers.splice(index, 0, element)
                break;
            case 'addMany':
                tokens.splice(0, 2); // махаме командата и индекса от масива

                for (let i = 0; i < tokens.length; i++) {
                    let element = +tokens[i];
                    numbers.splice(index, 0, element);
                    index++;
                }
                break;
            case 'contains':
                console.log(numbers.indexOf(index));
                break;
            case 'remove':
                numbers.splice(index, 1);
                break;
            case 'shift':
                for (let k = 0; k < index; k++) {
                   let position = numbers.shift();
                   numbers.push(position);
                }
                break;
            case 'sumPairs':
                let resultArr = [];
                if (numbers.length %2 !== 0) {
                    numbers.push(0);
                }
                for (let j = 0; j < numbers.length; j+=2) {
                    resultArr.push(numbers[j] + numbers[j+1]);
                }
                numbers = resultArr;
                break;
                
            default:
                console.log(`[ ${numbers.join(', ')} ]`);
                return;
        }
    }
}
// arrayManipulator([1, 2, 4, 5, 6, 7],
//     [ 'sumPairs','add 1 8', 'contains 1', 'contains 3', 'print']
// );
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// );
// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
//     ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]);