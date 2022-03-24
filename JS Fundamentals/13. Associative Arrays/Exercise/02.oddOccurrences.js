function solve(input) {
    // convert input to array
    let words = input.split(' ');
    let result = {};

    // for every element of input array
    for (let word of words) {
        //  count word as lowercase
        if (result.hasOwnProperty(word)) {
            
        } else {
            result[word] = 1;
        }
    }
    let filtered = Object.entries(result);
    filtered.filter([word, count]) => {

    }
}
    solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
    solve('Cake IS SWEET is Soft CAKE sweet Food');``