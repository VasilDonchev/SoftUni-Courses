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

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
