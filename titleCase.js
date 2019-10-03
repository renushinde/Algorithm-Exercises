// Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.


function titleCase(str) {
	let newStr = str.toLowerCase().split(" ");
	console.log (newStr);
	for ( let i=0; i< newStr.length; i++) {
		newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
		console.log(newStr);
	}
	return newStr.join(" ");
 }

titleCase("I'm a little tea pot");