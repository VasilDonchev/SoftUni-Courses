function city(obj) {
  // ВАРИАНТ 1
  let cityKeys = Object.keys(obj); // returns array with all the properties
  for (let key of cityKeys) {
    console.log(`${key} -> ${obj[key]}`);
  }
  // ВАРИАНТ 2
  let cityEntries =
    Object.entries(obj); /* връща двойка propertie: value (tuples)
  [cityKey, cityValue]  */
  for (let [cityKey, cityValue] of cityEntries) {
    console.log(`${cityKey} -> ${cityValue}`);
  }
}
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
