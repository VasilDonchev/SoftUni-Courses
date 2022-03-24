function objectsDemo() {
  let person = {
    name: "Ivo",
    age: 30,
    run: function () {
      return "Running!";
    },
  };
  person.pet = "cat";
  let hair = "hairColor" 
  person[hair]= "blond";
  person["gender"] = "male"; // { name: 'Ivo', age: 30, pet: 'cat', gender: 'male' }

  person.pet = null; // нулираме стойността без да трием ключа
  delete person.pet; // изтрива стойността и ключа

  person.pet = { name: "Lasi", type: "dog" };

  let copy = Object.assign(person); // copie na refernciqta, ne pravi nov obekt (shadow copy)
  let copy2 = JSON.parse(JSON.stringify(person)); // дълбоко копие(нов обект) (deep copy)
  person.pet.name = "Buki";
  person.age = 100;

  console.log("Person");
  console.log(person);
  console.log(person.pet.name);
  console.log("Copy of Person");
  console.log(copy2.pet.name);
  console.log(person.run());
}
objectsDemo();
