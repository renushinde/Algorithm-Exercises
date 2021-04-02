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

function reverseArr (arr) {
  let newArr = [];
  for(let i = arr.length-1; i>=0; i--) {
    console.log(i);
  }
return newArr;
}

console.log(reverseArr([2,3,4,5]));