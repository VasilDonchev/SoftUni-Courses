let key = 'two';

let assocArr = {
    'one' : 1,
    [key] : 0
};


assocArr["three"] = 3;
assocArr.five = 5;
assocArr[key] = 2

for (let key in assocArr) {
  console.log(key + " = " + assocArr[key]);
}
