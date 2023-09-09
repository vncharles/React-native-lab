// Test data
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

// Calculate average scores
const calculateAverage = (scores) => scores.reduce((acc, score) => acc + score, 0) / scores.length;

const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

// Minimum score requirement
const minScore = 100;

// Determine the winner
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
  console.log("Dolphins win!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
  console.log("Koalas win!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore && koalasAverage >= minScore) {
  console.log("It's a draw!");
} else {
  console.log("No winner.");
}

// Bonus 1: Minimum score requirement for a win
// Test data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAverageBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAverageBonus1 = calculateAverage(koalasScoresBonus1);

if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= minScore) {
  console.log("Bonus 1: Dolphins win!");
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= minScore) {
  console.log("Bonus 1: Koalas win!");
} else {
  console.log("Bonus 1: No winner.");
}

// Bonus 2: Minimum score requirement for a draw
// Test data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAverageBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAverageBonus2 = calculateAverage(koalasScoresBonus2);

if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= minScore && koalasAverageBonus2 >= minScore) {
  console.log("Bonus 2: It's a draw!");
} else {
  console.log("Bonus 2: No winner.");
}
