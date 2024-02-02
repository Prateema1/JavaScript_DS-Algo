/**
https://leetcode.com/problems/valid-parentheses/description/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

**/

/**
 * Time Complexity = O(N)
 * Space Complexity = O(N)
 */

const string= "[(){}]";
const isValidParentheses = (s) => {
  if(s.length === 0) {
    return null;
  }
  const hashMap = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  const stack = [];
   for(let ch of string) {
     if(hashMap[ch]) { // ch is an opening bracket
      stack.push(hashMap[ch]);   // push its closing bracket pair
     } else if(stack.length > 0 && stack[stack.length -1] === ch) {
       stack.pop();
     }
    else {
      return false;
   }
}
return stack.length === 0;
}

console.log(isValidParentheses(string));