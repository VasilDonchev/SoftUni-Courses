function _cinemaTickets(input) {
    let command = input.shift();
    let totalTickets = 0;
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;

    while (command !== "Finish") {
        let name = command;
        let freeSpace = Number(input.shift());
        let tempCommand = input.shift();
        let  tempTicket = 0;

        while (tempCommand !== "End") {
            tempTicket++;
            switch (tempCommand) {
                case "student": studentCount++; break;
                case "standard": standardCount++; break;
                case "kid": kidsCount++; break;
            }
            if (tempTicket == freeSpace) {
                break;
            }
            tempCommand = input.shift();
        }
        totalTickets += tempTicket;
        console.log(
            `${name} - ${((tempTicket * 100) / freeSpace).toFixed(2)}% full.`);
        command = input.shift();
}
    console.log(`Total tickets: ${totalTickets}`);
    console.log(
      `${((studentCount * 100) / totalTickets).toFixed(
        2
      )}% student tickets.`
    );
    console.log(
      `${((standardCount * 100) / totalTickets).toFixed(
        2
      )}% standard tickets.`
    );
    console.log(
      `${((kidsCount * 100) / totalTickets).toFixed(2)}% kids tickets.`
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
"Finish"]);
