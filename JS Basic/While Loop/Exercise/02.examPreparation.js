function examPreparation(input) {
  let maxBadGrades = input[0];
  let goodGrades = 0;
  let badGrades = 0;
  let sumOfGrades = 0;
  let lastTask = "";
  let index = 0;

  let currentTask = input[index + 1];
  let currentGrade = input[index + 2];
  while (badGrades < maxBadGrades) {
    if (currentGrade <= 4.0) {
      badGrades++;
    }
    goodGrades++;
    index += 2;
    sumOfGrades += Number(currentGrade);
    lastTask = currentTask;
    currentTask = input[index + 1];
    currentGrade = input[index + 2];
    if (currentTask === "Enough") {
      break;
    }
  }
  if (badGrades == maxBadGrades) {
    console.log(`You need a break, ${badGrades} poor grades.`);
  } else {
    let averageScore = sumOfGrades / goodGrades;
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${goodGrades}`);
    console.log(`Last problem: ${lastTask}`);
  }
}
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
