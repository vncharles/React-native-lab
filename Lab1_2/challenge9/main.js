// test data
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
	arr.forEach((element, index) => {
		console.log(`${element}oC in ${index+1} days`);
	});
}

console.log("Test data 1");
printForecast(data1);

console.log("Test data 2");
printForecast(data2);