function softUniReception(arr) {
  let firstReceptionist = Number(arr[0]);
  let secondReceptionist = Number(arr[1]);
  let thirdRecpt = Number(arr[2]);
  let studentsCount = Number(arr[3]);

  let efficiency = firstReceptionist + secondReceptionist + thirdRecpt;
  //let time = 0;
  let counter = 0;

  // while (studentsCount > 0) {
  //   time += efficiency;
  //   counter++;
  //   studentsCount -= efficiency;
  //   if (counter % 4 == 0) {
  //     counter++;
  //   }
  // }
  while (studentsCount > 0) {
    
    counter++;
    if (counter % 4 != 0) {
      studentsCount -= efficiency;
    }
  }

  console.log(`Time needed: ${counter}h.`);
}
softUniReception(["5", "6", "4", "20"]);
console.log('---------');
softUniReception(["3", "2", "5", "40"]);
console.log('---------');
softUniReception(["1", "0", "0", "9"]);
