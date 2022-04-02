function matchPhoneNumber(input) {
  //let patern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g; // /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g
  let patern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g;
  let validPhones = [];
  let validPhone = null;
  while (validPhone = patern.exec(input) !== null) {
    validPhones.push(validPhone[0]);
    validPhone = patern.exec(input);
  }
  console.log(validPhones.join(", "));
}
function matchPhoneNumber(input) {
    let patern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
    let validPhones = [];
    let validPhone;
    while ((validPhone = patern.exec(input)) !== null) {
      validPhones.push(validPhone[0]);
    }
    console.log(validPhones.join(", "));
  }
matchPhoneNumber(
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);
