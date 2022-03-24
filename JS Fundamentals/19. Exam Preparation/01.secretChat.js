function secretChat(input) {
    let commands = {
        InsertSpace,
        Reverce,
        ChangeAll
    }
  // take text from input
  let text = input.shift();

  // parse commands
  while (input[0] != "Reveal") {
    let tokens = input.shift().split(":|:");
    let name = tokens[0];
    let p1 = tokens[1];
    let p2 = tokens[2];

    let command = commands[name];
    text = command(text, p1, p2);
  }
  
  // print result
  console.log(`You have new text message: ${text}`);
return

// Insert space
  // - take left and right parts(divide at index)
  // - return left+ space + right
  // - print cuurnt text
  function InsertSpace(text, index) {
    let left = text.slice(0, index);
    let right = text.slice(index);

    let result = left + " " + right;
    console.log(left, right);
    return result;
  }

  // Revrers
  // - find location of substring
  // - if found:
  // -- take left part from start to index
  // -- rake right part from end of substring to end of text
  // - otherwise, print error
  // - print cuurent text
  function Reverce(text, substr) {
    let index = text.indexOf(substr);
    if (index != -1) {
      let left = text.slice(0, index);
      let right = text.slice(index + substr.length);

      console.log(left, right);
      let result = left + right + substr.split("").reverse().join("");

      console.log(result);
      return result;
    } else {
        console.log('eror');
        return text;
    }
  }

  // Change all
function ChangeAll(text, substr, replacement) {
      // - replace all occurances of substring with replacement
    let result = text.split(substr).join(replacement);

      // - print cuurent text
    console.log(result);
    return result;
  }
}


secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
