function isPalindrome(word) {
  const word  = word.toLowerCase()

  for (let i=0; i<word.length; i+=1) {
    if(word[i] !== word[word.length -1 - i]) {
      return false

    }
    return true
  }
}

/* 
  Add your pseudocode here
I tried an 'if else' statement, but that only got two test to pass.
I went on google to see if other people found a solution that could help.
I found a video that helped me figure out what I was doing.
 
*/

/*
  Add written explanation of your solution here
  Used a for loop to loop through the string and checked if each end matched up.

  used toLowerCase so capitalization wouldn't be a problem.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
