function activationKeys(arr) {
  let key = arr.shift();
  let [command, ar1, ar2, ar3] = arr.shift().split(">>>");

  while (command !== "Generate") {
    if (command === "Contains") {
      contains(ar1);
    } else if (command === "Flip") {
      flip(ar2, ar3);
    } else if (command === "Slice") {
      slice(ar1, ar2);
    }
    [command, ar1, ar2, ar3] = arr.shift().split(">>>");
  }

  function contains(substring) {
    if (key.includes(substring)) {
      console.log(`${key} contains ${substring}`);
    } else {
      console.log("Substring not found!");
    }
  }
  function flip(startIndex, endIndex) {
    let flipped = key.substring(Number(startIndex), Number(endIndex));
    let newArr = key.split(flipped);
    if (ar1 === "Lower") {
      flipped = flipped.toLowerCase();
    } else {
      flipped = flipped.toUpperCase();
    }
    key = newArr[0] + flipped + newArr[1];
    return console.log(key);
  }
  function slice(startIndex, endIndex) {
    let removeStr = key
      .split("")
      .splice(startIndex, endIndex - startIndex)
      .join("");
    key = key.split(removeStr).join("");
    return console.log(key);
  }
  console.log(`Your activation key is: ${key}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
