function reverseInPlace(arr) {
// repear for all elements from beginning to middle
// - swap current element [0 + i] with element in other half [(length -1) -i]
// - use temp variable to store value during swap

// console.log(arr.reverse().join(','));

let k = arr.length - 1;
for ( let i = 0; i < arr.length / 2; i++, k--){
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}

console.log(arr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);