const fizzBuzzToN = (n) => {
	let numberArr = [];

	for (let i = 1; i <= n; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			numberArr.push("FizzBuzz");
		} else if (i % 5 === 0) {
			numberArr.push("Buzz");
		} else if (i % 3 === 0) {
			numberArr.push("Fizz");
		} else {
			numberArr.push(i);
		}
	}

	return numberArr;
};

console.log(fizzBuzzToN(5));
