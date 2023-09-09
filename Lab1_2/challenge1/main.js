// data 1
const weightMarks1 = 78;
const hightMarks1 = 1.69;
const weightJohn1 = 92;
const hightJohn1 = 1.95;

// data 2
const weightMarks2 = 95;
const hightMarks2 = 1.88;
const weightJohn2 = 85;
const hightJohn2 = 1.67;

// Calculate BMI for Mark and John for Data 1
const BMIMarks1 = weightMarks1 / (hightMarks1 * hightMarks1);
const BMIJohn1 = weightJohn1 / (hightJohn1 * hightJohn1);

// Calculate BMI for Mark and John for Data 1
const BMIMarks2 = weightMarks2 / (hightMarks2 * hightMarks2);
const BMIJohn2 = weightJohn2 / (hightJohn2 * hightJohn2);

let markHigherBMI1 = BMIMarks1 > BMIJohn1;
let markHigherBMI2 = BMIMarks2 > BMIJohn2;

console.log(`Mark has a higher BMI than John with data 1: ${markHigherBMI1}`);
console.log(`Mark has a higher BMI than John data 1: ${markHigherBMI2}`);