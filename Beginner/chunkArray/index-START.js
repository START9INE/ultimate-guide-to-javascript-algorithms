/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
//==========================
// Looping Through the Array
// =========================

function chunkArray(array, size) {
  let result = []
	for (value of array) {
		let lastArray = result[result.length -1 ]
		if (!lastArray || lastArray.length == size) {
			result.push([value])
		} else{
			lastArray.push(value)
		}
	}
	return result
}


//=====================================
// Looping Through the Number of Chunks
// ====================================

function chunkArray(array, size) {
	let result = []
	let arrayCopy = [...array]
	while (arrayCopy.length > 0) {
		result.push(arrayCopy.splice(0, size))
	}
	return resultgoo
}



//==========================
// Using .slice()
// =========================

function chunkArray(array, size) {
	let result = []
	for (let i = 0; i < array.length; i++) {
		let chunk = array.slice(i, i + size)
		result.push(chunk)
	}
	return result
}

//==========================
// Recursion
// =========================

function chunkArray(array, sizes) {
	if(array.length <= size){ return [array]
	
	}
	return [array.slice(0, size), ...chunkArray(array.slice(size), size),]
	}


module.exports = chunkArray;
