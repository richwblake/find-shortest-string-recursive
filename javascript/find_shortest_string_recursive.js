function findShortestStringRecursive(arr) {
    let shortest = arr[0];
    return short_util(arr, shortest, 0);
}

const short_util = (arr, shortest, i) => {
    if (i === arr.length) return shortest;
    if (arr[i].length < shortest.length) shortest = arr[i];
    return short_util(arr, shortest, i + 1);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
