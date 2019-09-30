// Factorialize a Number Return the factorial of the provided integer.

function factorial (num) {
	if (num === 1) {
		return 1;
	} else {
		return num * factorial (num -1);
	}
	
}

console.log (`The factorial is ` + factorial (4));