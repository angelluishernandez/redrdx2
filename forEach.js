// This is not an optimal solution as we are modifying the original array

const fizzBuzzToN = (n) => {
	// If we define an array with new Array(n) it cannot be modified

	const arr = Array.apply(null, Array(n));

	arr.forEach((el, index) => {
		index++;

		const isFizz = index % 3 === 0;
		const isBuzz = index % 5 === 0;

		if (isFizz && isBuzz) {
			arr[index] = "FizzBuzz";
		} else if (isBuzz) {
			arr[index] = "Buzz";
		} else if (isFizz) {
			arr[index] = "Fizz";
		} else {
			arr[index] = index;
		}
	});

	// If not filtered it returns the first element as undefined

	return arr.filter((el) => el !== undefined);
};

console.log(fizzBuzzToN(5));
