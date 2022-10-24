/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
	let jointArray = [];

	arrays.forEach((array) => {
		jointArray = [...jointArray, ...array];
	});

	return [...new Set([...jointArray])];
}

//===========>
//Using Sets
//===========>

function mergeArrays(...arrays) {
	let jointArray = [];

	arrays.forEach((array) => {
		jointArray = [...jointArray, ...array];
	});

	return [...new Set([...jointArray])];
	
	// Addtionally you can achieve this by using the Arra.from() method to conver the set which is an iterable object
	// to an array as shown below
	return Array.from(new Set([...jointArray]))
}

//===========>
//Using Filter
//===========>

function mergeArrays(...arrays) {
	let jointArray = []

	arrays.forEach(array => {
		jointArray = [...jointArray, ...array]
	})
	const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
	return uniqueArray
}


//===========>
//Using Filter
//===========>


function mergeArrays(...arrays) {
	let jointArray = []

	arrays.forEach(array => {
		jointArray = [...jointArray, ...array]
	})
	const uniqueArray = jointArray.reduce((newArray, item) => {
		if (newArray.includes(item) ){
			return newArray
		} else {
			return [...newArray, item]
		}
	}, [])
	return uniqueArray
}


module.exports = mergeArrays;
