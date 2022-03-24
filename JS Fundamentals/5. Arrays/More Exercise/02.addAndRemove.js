function addAndRemove(arr) {
  let newArr = [];
  let initialNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    switch (command) {
      case "add":
        initialNumber++;
        newArr.push(initialNumber);
        break;
      case "remove":
        initialNumber++;
        newArr.pop();
    }
  }
  if (newArr.length == 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join(" "));
  }
}
addAndRemove(['remove', 'remove', 'remove']);
