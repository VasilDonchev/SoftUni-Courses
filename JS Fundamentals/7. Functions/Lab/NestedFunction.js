function printCertificate(grade, names) {
  if (pass(grade)) {
    printHeader();
    printName(names);
    formatGrade(grade);
  } else {
    console.log("Student does not qualify");
  }
}
function pass(grade) {
  return grade >= 3;
}

function printHeader() {
  console.log("~~~-   {@}   -~~~");
  console.log("~- Certificate -~");
  console.log("~~~-  ~---~  -~~~");
}
function printName(nameArr) {
  console.log(nameArr[0] + " " + nameArr[1]);
}
function formatGrade(input) {
  let grade = input.toFixed(2);
  let desc;
  if (grade < 3) {
    desc = "Fail";
    grade = "2";
  } else if (grade < 3.5) {
    desc = "Poor";
  } else if (grade < 4.5) {
    desc = "Good";
  } else if (grade < 5.5) {
    desc = "Very good";
  } else {
    desc = "Excellent";
  }

  console.log(`${desc} (${grade})`);
}

printCertificate(5.25, ["John", "Smith"]);
printCertificate(4.3, ["Peter", "Rober"]);
printCertificate(2.8, ["George", "Boboe"]);
