function oldBooks(input) {
  let favoritBook = input[0];
  let index = 1;
  let isFound = false;

  let newBook = input[index];
  while (newBook !== "No More Books") {
    if (newBook === favoritBook) {
      isFound = true;
      break;
    }
    index++;
    newBook = input[index];
  }
  if (isFound) {
    console.log(`You checked ${index - 1} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${index - 1} books.`);
  }
}
oldBooks([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
