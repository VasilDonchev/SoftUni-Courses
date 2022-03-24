let cat = {     // създаване на обект
    name : 'Pesho',
}
console.log(cat.name);
cat.age = 5;        // 1.добавяне на свойство към обекта
console.log(cat);
cat['color'] = 'black and withe';       // 2.добавяне на свойство към обекта
console.log(cat);
delete cat.color;         // изтриване на свойство към обекта - стар метод
console.log(cat);
cat.age = nul;
console.log(cat);
//cat.age === 0 ? : ;
