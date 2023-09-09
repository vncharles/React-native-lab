const calcTip = (bill) =>
	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Test the function with a bill value of 100
const testBill = 100;
const tipForTestBill = calcTip(testBill);
console.log(`For a bill of ${testBill}, the tip is ${tipForTestBill}`);

// Test data array 'bills'
const bills = [125, 555, 44];

// Calculate tips and store them in the 'tips' array
const tips = bills.map((bill) => calcTip(bill));

// Bonus: Calculate total values (bill + tip) and store them in the 'total' array
const total = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total Values:', total);
