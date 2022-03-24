function maxSequenceOfEqualElements(arr) {
  let leftMostSequence = [];
  let currentSequence = [];
  for (let i = 0; i < arr.length; i++) {
    currentSequence = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        currentSequence.push(arr[i]);
      } else {
        break;
      }
      if (leftMostSequence.length < currentSequence.length) {
        leftMostSequence = currentSequence;
      }
    }
  }
  console.log(leftMostSequence.join(" "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
