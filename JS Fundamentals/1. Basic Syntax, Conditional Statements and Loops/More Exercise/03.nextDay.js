function solve(inputYear, inputMonth, inputDay) {

  let nextDate = new Date(inputYear, inputMonth - 1, inputDay + 1);
  
  let outputYear = nextDate.getFullYear();
  let outputMonth = nextDate.getMonth() + 1;
  let outputDay = nextDate.getDate();
  console.log(`${outputYear}-${outputMonth}-${outputDay}`);
}
solve(2016, 9, 30);
solve(2020, 3, 24);
