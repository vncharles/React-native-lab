// data test
const Mark = {
	fullname: "Marks",
	weight: 78,
	high: 1.69,
	calcBMI: function() { // this is function calc bmi
		this.BMI = this.weight / (this.high * this.high);
		return this.BMI;
	} 
}

const John = {
	fullname: "John's",
	weight: 92,
	high: 1.95,
	calcBMI: function() { // this is function calc bmi
		this.BMI = this.weight / (this.high * this.high);
		return this.BMI;
	} 
}

// calculate
Mark.calcBMI();
John.calcBMI();

if(Mark.BMI > John.BMI) {
	console.log(`Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})!`);
} else {
	console.log(`John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})!`);
}