function messageManager(arr) {
  let messageCapacity = Number(arr.shift());
  let manager = {};
  let tokens = arr.shift().split("=");
  let command = tokens[0];
  while (command != "Statistics") {
    if (command == "Add") {
      let userName = tokens[1];
      if (!manager.hasOwnProperty(userName)) {
        let sent = Number(tokens[2]);
        let received = Number(tokens[3]);
        manager[userName] = { sent, received };
      }
    } else if (command == "Message") {
      let [_, sender, receiver] = tokens;
      if (manager.hasOwnProperty(sender) && manager.hasOwnProperty(receiver)) {
        manager[sender].sent++;

        manager[receiver].received++;
        if (manager[sender].sent + manager[sender].received >= messageCapacity) {
          delete manager[sender];
          console.log(`${sender} reached the capacity!`);
        } else if (
          manager[receiver].sent + manager[receiver].received >=
          messageCapacity
        ) {
          delete manager[receiver];
          console.log(`${receiver} reached the capacity!`);
        }
      }
    } else if (command == "Empty") {
      let userName = tokens[1];
      if (userName == "All") {
          manager = {};
        
      } else if (manager.hasOwnProperty(userName)) {
        delete manager[userName];
      }
    }
    tokens = arr.shift().split("=");
    command = tokens[0];
  }
  let result = Object.entries(manager)
  console.log(`Users count: ${result.length}`);
  for (let user of result) {
      let userName = user[0];
      let sent = user[1].sent;
      let received = user[1].received;
      let allMesseges = sent + received;
      console.log(`${userName} - ${allMesseges}`);
      
  }
}
messageManager(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Empty=Allen",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"])


;
