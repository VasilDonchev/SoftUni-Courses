function _cinemaTickets(input) {
  let command = input.shift();
  let moviePlaces = Number(input.shift());
  let currentStudentTickets = 0;
  let currentStandardTickets = 0;
  let currentKidTickets = 0;
  let totalTickets = 0;
  let movie = "";
  let buyedTickets = 0;

  while (command !== "Finish") {
    movie = command;
    command = input.shift();
    while (command !== "End" && movie != "Finish") {
      buyedTickets++;
      switch (command) {
        case "student":
          currentStudentTickets++;
          break;
        case "standard":
          currentStandardTickets++;
          break;
        case "kid":
          currentKidTickets++;
          break;
        case "End":
          break;
        case "Finish":
          break;
      }
      if (moviePlaces >= buyedTickets) {
        break;
      }
      command = input.shift();
    }

    
    totalTickets += buyedTickets;
    console.log(
      `${movie} - ${((buyedTickets * 100) / moviePlaces).toFixed(2)}% full.`
    );
    buyedTickets = 0;

    if (command === "Finish") {
      break;
    }
    // command = input.shift();
    moviePlaces = 0;
    moviePlaces = Number(input.shift());
  }
  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((currentStudentTickets * 100) / totalTickets).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((currentStandardTickets * 100) / totalTickets).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((currentKidTickets * 100) / totalTickets).toFixed(2)}% kids tickets.`
  );
}
_cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "standard",
  "standard",
  "standard",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
