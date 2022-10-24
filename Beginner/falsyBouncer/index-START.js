/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/
//Note: there are only six falsy values in javaScript: undefined, null, Nan, 0, "" and false


//===========>
//Using filter (my solution)
//===========>




function falsyBouncer(array) {
	return array.filter(Boolean);
}



//===========>
//Using a for...of Loop
//===========>

function falsyBouncer(array) {
	let result = []
	// loop through with each array values
	for (value of array) {
	// push into result if truthy	
		if (value){
			result.push(value)
		}
	}
	return result
}


//===========>
//Using Filter
//===========>

function falsyBouncer(array) {
	return array.filter((value) => {
		return Boolean(value)  })
}

module.exports = falsyBouncer;
