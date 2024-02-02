/**
 * https://leetcode.com/problems/valid-anagram/
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 * 
 * 
 */

const string1 = "anagram";
const string2 = "nagaram";

const validAnagram =  (s1, s2) => {
  // Handle the edge case 
  // if(s1.length !== s2.length) {
  //   return false;
  // }

  const sortedS1 = s1.split("").sort().join("");
  const sortedS2 = s2.split("").sort().join("");

  console.log(sortedS1);
  console.log(sortedS2);

  for(let ch in sortedS1) {


}
}

const isAnagram = validAnagram(string1, string2);
// console.log(isAnagram)