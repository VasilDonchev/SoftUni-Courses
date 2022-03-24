function sortAnArrayBy2Criteria(arr) {
  let sorterdArr = arr.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );
  for (const iterator of sorterdArr) {
    console.log(iterator);
  }
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
