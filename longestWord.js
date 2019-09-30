// Find the Longest Word in a String. Return the length of the longest word in the provided sentence.
//Your response should be a number.

function findLongestWordLength(str) {
	let result = "";
	let newStr = str.split(" ");
	console.log(newStr);
	for ( let i=0; i< newStr.length; i++) {
		if (newStr[i]. length > result.length) {
			result = newStr[i];
		}
	}
	return result.length;
}


console.log (findLongestWordLength("The quick brown fox jumped over the lazy dog"));