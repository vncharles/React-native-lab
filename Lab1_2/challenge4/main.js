// Function to calculate the tip
const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// Test data
const billValues = [275, 40, 430];

// Calculate and print tips for test data
billValues.forEach((bill) => {
  const tip = calculateTip(bill);
  const totalValue = bill + tip;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
});