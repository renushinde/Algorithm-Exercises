// Check if a string (first argument, str) ends with the given target string (second argument, target).
function confirmEnding(str, target) {
 
 for ( let i=0; i< str.length ; i++)  {
 	if (str.slice(-target.length) === target) {
 		return true;
 	}
 }
 return false;
}

console.log (confirmEnding("Bastian", "n"));
console.log (confirmEnding("Open sesame", "same"));
