function addressBook(input) {
    let addressbook = {};
    for (let line of input) {
      let [name, address] = line.split(':');
      addressbook[name] = address;
    }
    let sortedArrey = Object.entries(addressbook);
    sortedArrey.sort((a,b) => {
        let keyA = a[0]
        let keyB = b[0]
        return keyA.localeCompare(keyB);
    })
    for (let sortedEntry of sortedArrey) {
      console.log(`${sortedEntry[0]} -> ${sortedEntry[1]}`);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);