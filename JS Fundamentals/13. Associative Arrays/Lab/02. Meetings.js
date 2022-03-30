function meeting(input) {
  let meetings = {};
  for (let line of input) {
    //let tokens = line.split(" ");
    let [weekday, person] = line.split(" ");
    // let weekday = tokens[0];
    // let person = tokens[1];
   
    if ( meetings.hasOwnProperty(weekday)) {
        console.log(`Conflict on ${weekday}!`);
    } else {
        meetings[weekday] = person;
        console.log(`Scheduled for ${weekday}`);
    }
  }
  for (let key in meetings) {
    console.log(`${key} -> ${meetings[key]}`);
  }
}

//meeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
meeting(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)
