let cat = {
    name:'Pesho',
    hello: (text) => console.log(text),
    children : {
        kitties: 3,
    }
};
cat.hello('Maw')

console.log(Object.keys(cat));
console.log(Object.values(cat));
console.log(Object.entries(cat));
console.log(typeof cat);
console.log(typeof cat.hello);