/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function longestWord(text) {
	var sentence = text.split(' ').sort((a,b) => a.length -  b.length)
	return sentence[sentence.length -1];
}



function longestWord(text) {
	let wordArray = text.split(' ')
	let maxLength = 0
	let result = ''

	for (let i = 0; i < wordArray.length; i++) {
		if (wordArray[i].length > maxLength) {
			maxLength = wordArray[i].length
			result = wordArray[i]
		}
	}

	return result
}





function longestWord(text) {
	var result = text.split('').reduce((maxLengthWord, currentWord) => {
		if (currentWord.length > maxLengthWord.length) {
			return currentWord
		} else {
			return maxLengthWord
		}
	},'' )
	return result
}



function longestWord(text) {
	var sortedArray = text.split(' ')
		.sort((wordA, wordB) => wordB.length - wordA.length)
	return sortedArray[0]
}
module.exports = longestWord;
