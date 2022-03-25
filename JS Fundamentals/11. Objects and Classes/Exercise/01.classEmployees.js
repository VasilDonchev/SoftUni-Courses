function classEmployees(arr) {
  let listOfEnployees = [];

  class Employees {
    constructor(name, length) {
      (this.name = name), (this.length = length);
    }
  }
  for (let employee of arr) {
    let currentEnployee = new Employees(employee, employee.length);
    listOfEnployees.push(currentEnployee);
  }
  listOfEnployees.forEach(element => 
    console.log(
        `Name: ${element.name} -- Personal Number: ${element.length}`
      )
  );
}
classEmployees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
