
//You are given two arrays and an index.
//Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.

//Begin inserting elements at index nof the second array.

//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

	console.log (arr2.slice(n));
	console.log (arr2.slice(0,n));
	console.log (arr1.slice());
return [...arr2.slice(0,n), ...arr1, ...arr2.slice(n)];
}

console.log (frankenSplice([1, 2, 3], [4, 5, 6], 1)); //  [ 4 , 1 , 2, 3, 5, 6]