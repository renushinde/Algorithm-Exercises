function mutation(arr) {
let firstWord = arr[0];
let secondWord = arr[1];
for ( let i=0; i<secondWord.length; i++) {
	if (firstWord.indexOf(secondWord[i]) === -1) {
		return false;
	} // If it doesn't exist
}
return true;
}

console.log (mutation(["hello", "he"]));