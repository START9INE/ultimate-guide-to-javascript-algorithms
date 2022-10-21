/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// An iterative approach to counting the number of vowels in a string of text.

const Vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
  // Initilize counter
  let counter = 0;

  // Loop through the text to test if each character is a vowelsCounte
  for (let letter of text.toLowerCase()) {
    if (Vowels.includes(letter)) {
      counter++;
    }
  }

  // Return number of vowels
  return counter;
}

// Using Regular Expressions to count the number of vowels in a string of text.
//

function vowelsCounter(text) {
  // Search text with Regex and store all matching instances
  let matchingInstances = text.match(/[aeiou]/gi);

  // Check if the matching instances exist then caluclate length
  if (matchingInstances) {
    // Return number of vowels
    return matchingInstances.length;
  } else {
    return 0;
  }
}

module.exports = vowelsCounter;
