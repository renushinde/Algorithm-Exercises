//Repeat a String Repeat a String
//Repeat a given string str(first argument) for numtimes (second argument). Return an empty string if numis not a positive number.
function repeatStringNumTimes (str, num) {
	let result ="";
	if (num < 0) {
		return "";
	} else {
		for  ( let i=0; i<num; i++) {

			result += str;
			console.log(result);
		}
	}
return result;
}
console.log (repeatStringNumTimes("*", 3));