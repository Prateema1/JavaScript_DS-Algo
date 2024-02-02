/**
 * https://leetcode.com/problems/contains-duplicate/
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 Example 1:

Input: nums = [1,2,3,4,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

const nums = [1,2,3,4,1];

/** 
 * Brute Force Approach
 * Use 2 for loops to iterate  through each element of the array
 * and compare with the next remaining elements in the array
 * Time Complexity: O(n^2)
 * Space  Complexity: O(1) Constant
 * 
 */

// const containsDuplicate = (nums) => {
//   for(let i =0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;

// }

// const isDuplicate = containsDuplicate(nums);
// console.log(isDuplicate);


/**
 * Optimized Solution
 * Using Hashing
 * We will be using Set Data structure but in this case space complexity will be there
 * But it is a good tradeoff considering our Time complexity reduces.
 * 
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 * 
 */

const containsDuplicateOptimized = (nums) => {
  const numsSet = new Set(nums);
  console.log(numsSet); // Set(4) { 1, 2, 3, 4 } 
  const isEqual = numsSet.size === nums.length;
  return !isEqual;

}

const isDuplicateOptimized = containsDuplicateOptimized(nums);
console.log(isDuplicateOptimized);