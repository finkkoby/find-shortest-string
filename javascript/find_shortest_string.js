function findShortestString(arr) {
  let shortestString = arr[0];
  for (let string of arr) {
    if (shortestString.length > string.length) {
      shortestString = string;
    }
  }
  return shortestString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// declare variable to hold shortest string and assign it arr[0]
// iterate through each array and compare the length to the existing length of our answer object
// if it is shorter than the string assigned to shortest string, update the answer object
// return shortest string variable
