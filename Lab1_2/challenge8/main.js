const calcTip = (bill) =>
	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Test data 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Calculate tips and store them in the 'tips' array
const tips = bills.map((bill) => calcTip(bill));

// Bonus: Calculate total values (bill + tip) and store them in the 'total' array
const total = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total Values:', total);
