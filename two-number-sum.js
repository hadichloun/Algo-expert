// Given an array of integers, no number in this array is repeated, and an integer representing the target sum,
//  implement a function that find whether there's a pair of numbers in the array that adds up to the target sum.
//   Return the pair in an array. If such pair does not exist, return an empty array.


// I can solve the problem by looping through each integer in the array and find if there is another integer in the rest of array
// that is equals to target sum - current integer. But that means I have to use a nested for loop, the outer for loop traverses the array
// and the inner for loop traverses the rest of the array to find the complement. Instead of the nested for loop, I can keep track of the complement 
// of each integer (target sum - integer) in a hash table, which provides a constant-time lookup on average. In the hash table, the key is the complement
// and the value is the integer. At each iteration, look up the integer in the hash table, if it is already in the hash table, then the pair is found, 
// return the pair, otherwise, calculate the complement and add the key/value pair into the hash table. If I get out of the for loop without returning the pair,
// return an empty array.

// function twoNumberSum(array, targetSum) {
//     const hashTable = new Map();
  
//     for (const num of array) {
//       if (hashTable.has(num)) {
//         return [hashTable.get(num), num];
//       }
  
//       const diff = targetSum - num;
//       hashTable.set(diff, num);
//     }
  
//     return [];
//   }


function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array.length[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}