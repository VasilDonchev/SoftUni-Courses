function commonElements(arr1, arr2) {
  for (let el of arr1) {
    for (const iterator of arr2) {
      if (iterator === el) {
        console.log(el);
      }
    }
  }
}
commonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
    
);
