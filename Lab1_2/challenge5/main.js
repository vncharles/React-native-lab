// Function to calculate the average of 3 scores
const calcAverage = (scores) => scores.reduce((acc, score) => acc + score , 0) / scores.length;

// Function to check the winner
const checkWinner = (dolphinsScores, koalasScores) => {
  const avgDolphins = calcAverage(dolphinsScores);
  const avgKoalas = calcAverage(koalasScores);

  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
};

// Test data
const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];
const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

// Determine the winner for Data 1 and Data 2
console.log("Data 1:");
checkWinner(dolphinsScores1, koalasScores1);

console.log("Data 2:");
checkWinner(dolphinsScores2, koalasScores2);
