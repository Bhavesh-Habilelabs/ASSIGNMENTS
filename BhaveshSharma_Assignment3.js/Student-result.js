let hindi = parseInt(Math.random() * 100);
let english = parseInt(Math.random() * 100);
let sanskrit = parseInt(Math.random() * 100);
let maths = parseInt(Math.random() * 100);
let science = parseInt(Math.random() * 100);
function studentResult(hindi, english, sanskrit, maths, science) {
  let total_marks = hindi + english + sanskrit + maths + science;
  let total_percentage = total_marks / 5;
  let grade = null;
  if (total_percentage >= 90) {
    grade = "A++";
  } else if (total_percentage >= 80) {
    grade = "A+";
  } else if (total_percentage >= 70) {
    grade = "A";
  } else if (total_percentage >= 60) {
    grade = "B";
  } else if (total_percentage >= 50) {
    grade = "C";
  } else if (total_percentage >= 42) {
    grade = "D";
  } else if (total_percentage >= 33) {
    grade = "E";
  } else {
    grade = "F";
  }
  console.log(`student score ${hindi} in Hindi`);
  console.log(`student score ${english} in English`);
  console.log(`student score ${sanskrit} in Sanskrit`);
  console.log(`student score ${maths} in Maths`);
  console.log(`student score ${science} in Science`);
  console.log("---------------------------------------");
  console.log("Total Marks Student Obtained : ", total_marks);
  console.log("Total Percentage Student Obtained : ", total_percentage + "%");
  console.log("Grade Obtained By the Student", grade);
}
studentResult(hindi, english, sanskrit, maths, science);