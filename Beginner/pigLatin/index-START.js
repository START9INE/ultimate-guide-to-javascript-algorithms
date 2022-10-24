// Rules
// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the ened of the word sequence and "ay" affixed. E.g
//  - "pig" = "igpay"
//
//  For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
//   - "glove" = "oveglay"
//
//   Folr words that begin with vowel sounds, simply add "way" to the end of the word. E.g
//    - "explain" = "explainway"
//
//
//
//
//=======================
// An Imperative Approach
//=======================
//
//
function pigLatin(str) {
	//Convert string to lowercase
	str = str.toLowerCase
	// Initialize array of vowels
	const vowels = ["a", "e", "i", "o", "u"];
	// Initialize vowel index to 0
	let vowelIndex = 0

	if (vowels.includes(str[0])) {
		// If first letter is a vowel
		return str + "way"
	} else {
		// If the first letter isn't a vowel i.e is a consonant
		for (let char of str) {
			// Loop through until the first vowel is found
			if (vowels.includes(char)) {
				// Store the index at which the first vowel exists
				vowelIndex = str.indexOf(char);
				break;
			}
		}
		// Compose the final string
		return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"
	}
}

//=======================
// A Declarative Approach
//=======================

function pigLatin(str) {
	return str
	.replace(/^([aeiouy])(._)/, '$1$2way')
	.replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')

}

