function _NxNMatrix(n){
for (let index = 1; index <= n; index++) {
    let sequence = [];
    for (let j = 1; j <= n; j++) {
        sequence.push(n);        
    }
    console.log(sequence.join(' '));
}
}
_NxNMatrix(7);