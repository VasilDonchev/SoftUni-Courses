function demo(input) {
  let arr = input;
  arr = arr.splice(1, 1);
  console.log(input);
  if (arr.includes(4)) {
    console.log('Yes');
  } else {
    console.log('No');
    console.log(input);
    input.join(0);
  }
  console.log(input);

}
demo([1, 2, 3, 4]);

let capitals = ['Sofia', 'Washington', 'London'];
for (let index = 0; index < capitals.length; index++) {
  console.log(capitals[index]);
  
}
console.log(capitals.join('|'));
