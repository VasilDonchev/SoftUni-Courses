// function condenseArrayToNumber(arr) {
//     let condensed= [];
//     for (let n of arr) {
//         condensed.push(n);
//     }
//     while (condensed.length > 1){
//         let temp = [];
//         for ( let i = 0; i< condensed.length -1; i++){
// temp.push(condensed[i] + condensed[i + 1]);
//     }
//     condensed = temp;
// }
// console.log(condensed[0]);
// }
// condenseArrayToNumber([2,10,3]);
// condenseArrayToNumber([5,0,4,1,2]);
// condenseArrayToNumber([1]);

function condenseArrayToNumber(arr) {
   
    while (arr.length > 1){
        let condensed = [];
        for ( let i = 0; i< arr.length -1; i++){
condensed.push(arr[i] + arr[i + 1]);
    }
    arr = condensed;
}
console.log(arr[0]);
}
condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);