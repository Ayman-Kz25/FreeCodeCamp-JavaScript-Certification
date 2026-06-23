function getAverage(scores) {
  let avg;
  let total = 0;

  for (let score of scores) {
    total += score;
    avg = Number(total / scores.length);
  }

  return avg;
}

function getGrade(score) {
  if (score < 0 || score > 100) {
    return "F";
  }

  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  let pass = getGrade(score);
  
  if (pass === "F") {
    return false;
  }

  return true;
}

function studentMsg(scores, score) {
  let avgScore = getAverage(scores);
  let grade = getGrade(score);
  let pass = hasPassingGrade(score);

  if (pass) {
    return `Class average: ${avgScore}. Your grade: ${grade}. You passed the course.`;
  }
  return `Class average: ${avgScore}. Your grade: ${grade}. You failed the course.`;
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
// console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
// console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]));
// console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));

// console.log(getGrade(100));
// console.log(getGrade(95));
// console.log(getGrade(87));
// console.log(getGrade(76));
// console.log(getGrade(63));
// console.log(getGrade(40));

// console.log(hasPassingGrade(97));
// console.log(hasPassingGrade(45));

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));