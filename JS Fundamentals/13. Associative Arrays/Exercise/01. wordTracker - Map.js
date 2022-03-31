function wordTracker(arr) {
  // pars input - take first element and split
  let words = arr.shift().split(" ");
  let result = new Map();

  for (let word of words) {
    result.set(word, 0);
  }

  // for each remaining element
  for (let word of arr) {
    // - if element  is what we're looking for, add 1 count
    if (result.has(word)) {
      let currentCoun = result.get(word);
      result.set(word, currentCoun + 1);
    }
  }
  // convert result to array
  let sortedWords = Array.from(result.entries());
  // sort by value
  sortedWords.sort((a, b) => b[1] - a[1]);
  // print result
  for (let enry of sortedWords) {
    console.log(`${enry[0]} - ${enry[1]}`);
  }
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
