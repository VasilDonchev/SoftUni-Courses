function convertToObject(json) {
  let obj = JSON.parse(json);

  let objEntries = Object.entries(obj);
  for (let [key, value] of objEntries) {
    console.log(`${key}: ${value}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
