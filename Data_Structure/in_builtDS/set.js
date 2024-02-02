// inbuit DS added in ES6
// DS that can hold collection of values but values must be unique
// sets are dynamically sized
// can contain mix of different data types like string, boolean,number, objects is same set
// they don't maintain insertion order that us value added first is not sure it will be first in the set
// sets are iterables , can use for of loop

/**
 * 
 * How they differ from arrays?
 * sets contain unique whereas arrays can have duplicate
 * sets do not maintain insertion order but arrays do
 * searching and deletion is faster in set
 * 
 */

// create a new set

const set = new Set([1,2,3]);  // The construction optionally takes arrays as arguments

for(let item of set) {
  console.log(item)
}

set.add(4);
console.log(set.has(4));
set.delete(3);

console.log(set);

set.clear();

console.log(set);

