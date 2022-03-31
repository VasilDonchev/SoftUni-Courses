function partyTime(arr) {  // 2 error test in judge
  let vipGuestList = new Set();
  let regularGuestList = new Set();
  let partyIndex = arr.indexOf("PARTY");
  let guestsList = arr.slice(0, partyIndex);
  let commingGuests = arr.slice(partyIndex + 1);

  for (let guest of guestsList) {
    let cod = Number(guest[0]);
    if (typeof cod >= 0) {
      vipGuestList.add(guest);
    } else {
      regularGuestList.add(guest);
    }
  }

  for (let guest of commingGuests) {
    let cod = Number(guest[0]);
    if (cod >= 0) {
      if (vipGuestList.has(guest)) {
        vipGuestList.delete(guest);
      }
    } else {
      regularGuestList.add(guest);
      regularGuestList.delete(guest);
    }
  }
  let count = vipGuestList.size + regularGuestList.size;
  console.log(count);

  for (let item of vipGuestList) {
    console.log(item);
  }
  for (let item of regularGuestList) {
    console.log(item);
  }
}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
);
