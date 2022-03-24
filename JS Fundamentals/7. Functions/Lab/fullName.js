let firstName = "Angel";
let lastName = "Georgiev";
// let names = "";                                  // 2 variant                   
// names = fullName(firstName, lastName);           // 2 variant  
let names = fullName(firstName, lastName);      // 3 variant

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

//names = fullName(firstName, lastName);  // 1 variant
console.log(names);
