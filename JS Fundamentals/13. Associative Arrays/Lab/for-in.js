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
  console.log(key);
  console.log(assocArr[key]);
  console.log(key + " = " + assocArr[key]);
}

let assocArrArray = Object.entries(assocArr); 
for (let el of assocArrArray){
  console.log(el);
}
