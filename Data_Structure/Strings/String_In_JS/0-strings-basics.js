// Creating Strings

const string = new String("Hello World!");
const string2 = "Bye Bye World!";  // double quotes
const string3 = 'Hello World!';  // single quote
const string4 = `Hello World!   // backticks
I am awesome ${string2}
`

console.log(string4);

console.log `Hey Its a new Day`


function test(string, youtubechannel, person) {
  console.log(string, youtubechannel, person);
  return;
}
const channel = "YoutUbe";
const naam = "Pratima";

test `Subscribe to ${channel} run by ${naam}`

// String length

const str = "Hello length of the string";
console.log(str.length);

// Accessing characters

console.log(str[1]);
console.log(str.charAt(3));

// Iterating string

// for(let ch of str) {
//   console.log(ch);
// }

// for(let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }


/**
 * Modifying string
 * As strings are immutable in JavaScript, we canot directly modify using index.
 * Example: str[i] = "str"
 * 
 * Instead we use replace method which returns a new string
 * 
 */

console.log(str.replace("Hello", "Bye"));
console.log(str);