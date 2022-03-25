function employees(arr) {
    // обхождаме (итерираме) масива arr['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']
  for (let singleName of arr) {

    let singlePerson = {
      name: singleName,
      personalNum: singleName.length,
    };
    console.log(
      `Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);

// "Name: {employeeName} -- Personal Number: {personalNum}"
