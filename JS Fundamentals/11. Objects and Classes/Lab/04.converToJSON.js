function converToJSON(name, lastName, hairColor){
    let obj = {
        name,
        lastName,
        hairColor
    }
    let output = JSON.stringify(obj);
    console.log(output);
}
converToJSON('George', 'Jones', 'Brown');