function isPalindrome(word) {
  // Write your algorithm here
  if (word === true) {
    return true
  }
  else if (word !== true) {
    return false
  }
}

/* 
  Add your pseudocode here

  I found the right solution. I came to the same conclusion, as the one in the solution branch, but I cannot get all the test to pass
*/

/*
  Add written explanation of your solution here

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
