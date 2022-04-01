let key = 'two';
let arr = [1,,2,3,4,5]
let assocArr = {
    'one' : 1,
    [key] : 0
};


assocArr["three"] = 3;
assocArr.five = 5;
assocArr[key] = 2

for (let key in assocArr) {
  console.log(key); // one, two ,three, five
  console.log(assocArr[key]); // 1, 2, 3, 5
  console.log(key + " = " + assocArr[key]); // one = 1, two = 2, three = 3, five = 5
}

let assocArrArray = Object.entries(assocArr); 
for (let el of assocArrArray){
  console.log(el); 
  // (2) ['one', 1]
  // (2) ['two', 2]
  // (2) ['three', 3]
  // (2) ['five', 5]
}
