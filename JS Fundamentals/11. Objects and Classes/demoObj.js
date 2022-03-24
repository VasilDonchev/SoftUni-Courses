function objCreator(fn, ln, a){
    let person = {
        firsName : fn,
        lastName: ln,
        age: a,
        sayHello : function() {console.log('Hi, guiys');}

    }
    //return person;
    console.log(person.firsName);
    console.log(person.lastName);
    console.log(person.age);
    console.log(person);
}
objCreator('Peter', 'Pan', 20)