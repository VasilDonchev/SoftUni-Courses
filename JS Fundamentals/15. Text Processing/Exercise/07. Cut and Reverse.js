function cutAndReverse(str){
let firstHalf = str.substring(0, str.length /2);
let secondHalf = str.substring(str.length /2);
let revFirstHalf=''; 
let revSecondHalf = '';

for (let i = firstHalf.length-1; i >= 0;i--){
    let currLetter = firstHalf[i]
    revFirstHalf+= currLetter ;
}
for (let i = secondHalf.length-1; i >= 0;i--){
    let currLetter = secondHalf[i]
    revSecondHalf+= currLetter ;
}
console.log(revFirstHalf);
console.log(revSecondHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')