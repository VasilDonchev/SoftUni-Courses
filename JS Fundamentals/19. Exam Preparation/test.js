let name = 'George'
name = Number(true);
console.log(name);

// for (let i =10; i>3; i -=2){
//     console.log(i);
// }
let arr = ["z", "s", 'a', 'd']
arr.sort((a,b) => b.localeCompare(a))
console.log(arr);

function  printText(text){
    console.log('I love' + text);
}
printText('JavaScript')