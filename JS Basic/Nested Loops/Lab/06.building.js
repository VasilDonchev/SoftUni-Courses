function _building(input) {

  let floorNumbers = Number(input[0]);
  let roomNumbers = Number(input[1]);

  for (let floor = floorNumbers; floor > 0; floor--) {
    let output = "";
    for (let room = 0; room < roomNumbers; room++) {
       if (floor == floorNumbers) {

           output += `L${floor}${room} `;
           
       } else if (floor % 2 == 0) {
        output += `O${floor}${room} `;
           
       } else {
        output += `A${floor}${room} `;

       }
    }
    console.log(output);
  }
}
_building(["6", "4"]);
