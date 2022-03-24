function passwordValidator(password) {
  let passLength = password.length;
  let isLenghtValid = isLenghtEnough(passLength);
  let isLettersAndDigitsOnly = isOnlyLettersAndDigits(password);
  let isAtLeastTwoigitsHaving = isHavingAtLeastTwoigits(password);

  function isLenghtEnough(passLength) {
    return passLength >= 6 && passLength <= 10;
  }
  function isOnlyLettersAndDigits(stringPassword) {
    let count1 = 0;
    for (let currCharIndex of stringPassword) {
      let currChar = currCharIndex.charCodeAt(0);
      if (
        (currChar >= 65 && currChar <= 90) ||
        (currChar >= 97 && currChar <= 122) ||
        (currChar >= 48 && currChar <= 57)
      ) {
        count1++;
      } else {
        count1--;
      }
    }
    return count1 == passLength ? true : false;
  }
  function isHavingAtLeastTwoigits(stringPassword) {
    let count2 = 0;
    for (let charIndex of stringPassword) {
      let currChar = charIndex.charCodeAt(0);
      if (currChar >= 48 && currChar <= 57) {
        count2++;
      }
    }
    return count2 >= 2 ? true : false;
  }
  if (isLenghtValid && isLettersAndDigitsOnly && isAtLeastTwoigitsHaving) {
    console.log("Password is valid");
  }
  if (!isLenghtValid) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isLettersAndDigitsOnly) {
    console.log("Password must consist only of letters and digits");
  }
  if (!isAtLeastTwoigitsHaving) {
    console.log("Password must have at least 2 digits");
  }
}
passwordValidator("logIn");
console.log("==========");
passwordValidator("MyPass123");
console.log("==============");
passwordValidator("Pa$s$s");
