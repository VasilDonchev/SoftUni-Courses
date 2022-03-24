function equalSums(array) {
  let currentIndex = 0;
  let leftSum = 0;
  let rightSum = 0;
  let index = 0;
  for (index = 0; index < array.length; index++) {
    currentIndex = Number(array[index]);
    leftSum = 0;
    rightSum = 0;
    for (let i = 0; i < index; i++) {
        leftSum += Number(array[i]);
    }
    for (let j = index + 1; j < array.length; j++) {
      rightSum += Number(array[j]);
    }
    if (leftSum == rightSum) {
      break;
    }
  }

  console.log(leftSum == rightSum ? index : "no");
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
