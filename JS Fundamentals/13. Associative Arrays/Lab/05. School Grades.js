function schoolGrade(arr) {
  let scoolGrades = new Map();
  for (let line of arr) {
    line = line.split(" ");
    let mane = line.shift();
    let grades = line.map(Number);

    if (scoolGrades.has(mane)) {
      // if student name exist
      let currentGrades = scoolGrades.get(mane);
      for (let grade of grades) {
        currentGrades.push(grade);
      }
      scoolGrades.set(mane, currentGrades);
    } else {
      scoolGrades.set(mane, grades);
    }
  }

  let sortedScoolGrades = Array.from(scoolGrades.entries());
  sortedScoolGrades.sort((a, b) => a[0].localeCompare(b[0]));

  for (let gradesEntry of sortedScoolGrades) {
    let studentNAme = gradesEntry[0];
    let studentGrades = gradesEntry[1];
    console.log(`${studentNAme}: ${averageGrade(studentGrades).toFixed(2)}`);
  }
  function averageGrade(grades) {
    return grades.reduce((a, b) => a + b, 0) / grades.length;
  }
}
schoolGrade(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
