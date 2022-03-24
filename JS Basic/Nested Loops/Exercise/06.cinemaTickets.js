function _cinemaTickets(input) {
  let command = input.shift();
  let currentStudentTickets = 0;
  let currentStandardTickets = 0;
  let currentKidTickets = 0;
  let totalTickets = 0;
   
  while (command !== "Finish") {
    let movieName = command;
    let freeSpace = Number(input.shift());
    command = input.shift();
    let tempTicket = 0;

    while (command !== "End") {
      tempTicket++;

      switch (command) {
        case "student": currentStudentTickets++; break;
        case "standard": currentStandardTickets++; break;
        case "kid": currentKidTickets++; break;
        }
      if (freeSpace <= tempTicket) {
        break;
      }
      command = input.shift();
    }
    totalTickets += tempTicket;
    console.log(
      `${movieName} - ${((tempTicket * 100) / freeSpace).toFixed(2)}% full.`
    );
    command = input.shift();
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
_cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

