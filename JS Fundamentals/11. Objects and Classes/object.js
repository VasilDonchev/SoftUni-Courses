let person = {
    sayHi() {
        console.log('Hello');
    },
    name: 'Peter',
    age: 30,
    gardes: [4,5,5.5,6,],
    sayBy: () => console.log('Goodby'),
};
console.log(person.sayHi());

let keys = Object.keys(person);

for (let key of keys) {
    console.log(key, person[key]);
}