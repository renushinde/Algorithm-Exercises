// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ...ending.

function truncateString(str, num) {
	// body...
	if ( num <= 3) {
		return str.slice (0, num) + "...";
	} else if (num >= str.length) {
		return str;
	} else  {
		return str.slice(0, num) + "...";
	}

	
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));



 // var str = 'The quick brown fox jumps over the lazy dog.';
 // console.log(str.slice(0,4))