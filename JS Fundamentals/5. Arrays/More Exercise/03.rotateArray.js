function rotateArray(arr) {
  let rotation = Number(arr.pop());
 
    for (let i = 0; i < rotation; i++) {
      let temp = arr.pop();
      arr.unshift(temp);
    }

  console.log(arr.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
