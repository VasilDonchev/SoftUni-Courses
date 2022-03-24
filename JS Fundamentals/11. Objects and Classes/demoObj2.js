function objectsDemo() {
    let person = {
      name: "Ivo",
      age: 30,      
    };

    let keys = Object.keys(person); // създава масив който съдържа ключовете от обекта ['name', 'age']
    let value = Object.values(person); // масив със стойностите ['Ivo', '30']
    let entries = Object.entries(person); // масив от масиви (keys and values)['name', 'age'],['Ivo', '30']]

    if (!person.hasOwnProperty('pet')) { // ако няма "pet" го добавя
         person.pet = 'Lasi';
    } else if (person.hasOwnPrperty('pet')) {
        person.age = 100;
    }
    console.log(person);
    for (let key in person) {     // обхождане и печатане на всички пропъртита на обекта {person} 
              console.log(person[key]);
      }
    

}
objectsDemo();