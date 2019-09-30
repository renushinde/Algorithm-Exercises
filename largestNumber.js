// function largestOfFour(arr) {
//   // You can do this!
 
//  let max = 0; 
//  for ( let i=0; i< arr.length; i++) {
//  	if (arr[i] > max) {
//  		max = arr[i];
//  	}
//  }
//  return max;
// }

// console.log (largestOfFour([2,3,4,5]));


function largestOfFour(arr) {
  // You can do this!
  let result = [0,0,0,0];
  for ( let i=0; i< arr.length;i++) {
  	//console.log(arr[i]);
  	for ( let j = 0; j<arr[i]. length; j++) {
  		//console.log(arr[i][j]);
  		if (arr[i][j] > result[i]) {
  			result[i] = arr[i][j];  		
  		}
  	}
  }
  return result;
}

console.log (largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));