function towns(arr) {

     // iterate array
  for (let table of arr) {

    let singleLineInfo = table.split(' | ');
    let town = singleLineInfo[0];
    let latitude = singleLineInfo[1];
    let longitude = singleLineInfo[2];

    //let [town, latitude, longitude] = table.split(" | "); // деструктуриране на масив

    let currentTownInfo = {
      town, //    съкратен запис, когато името и стойността са с еднакви имена
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };

    console.log(currentTownInfo);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
