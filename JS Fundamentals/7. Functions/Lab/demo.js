function reverse(n, arr){
    let newArray = [];
    // for (let i = 0; i < n; i++ ){
    //     newArray.push(arr[i]);
    // }
    // console.log(newArray.join(' '));
    // let revArr = [];
    // for (let i = newArray.length -1; i >= 0; i--) {
    //     revArr.push(newArray[i]);
        
    // }
    //console.log(revArr.join(' '));
    for (let index = n - 1; index >= 0; index--) {
       newArray.push(arr[index]);
        
    }
    console.log(newArray.join(' '));
}
reverse(3, [10,20,30,40]);