// This is not an optimal solution as we are modifying the original array

const fizzBuzzToN = (n) => {
	// If we define an array with new Array(n) it cannot be modified

	const arr = Array.apply(null, Array(n));

	arr.forEach((el, index) => {
		let i = (index += 1);

		if (i % 5 === 0 && i % 3 === 0) {
			arr[index] = "FizzBuzz";
		} else if (i % 5 === 0) {
			arr[index] = "Buzz";
		} else if (i % 3 === 0) {
			arr[index] = "Fizz";
		} else {
			arr[index] = i;
		}
	});

	// If not filtered it returns the first element as undefined

	return arr.filter((el) => el !== undefined);
};

console.log(fizzBuzzToN(5));
