function encryptingPassword(arr) {
  let pattern = /(.+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|(.{3})<\1/g;
  let pass = Number(arr.shift());
  for (let i = 0; i < pass; i++) {
    let line = arr[i];
    let validPass = pattern.exec(line);
    let valiPpassword = [];
    if (validPass !== null) {
      let p1 = validPass[2];
      let p2 = validPass[3];
      let p3 = validPass[4];
      let p4 = validPass[5]; //.groups;
      valiPpassword.push(p1, p2, p3, p4);
      console.log(`Password: ${valiPpassword.join("")}`);
    } else {
      console.log("Try another password!");
    }
  }
}
encryptingPassword((["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
);