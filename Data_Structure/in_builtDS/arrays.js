const arr = [1,2,3,"pratima"];

// access element

console.log(arr[0]);

// arraya are iterables , can use for of loop..

for(let item of arr) {
  console.log(item);
}

//operations on array

arr.push(5);
arr.unshift(0);
arr.pop();
arr.shift();

// other operations

// map, filter, reduce, slice and splice

console.log(arr);


//Time Complexity

/**
 * push/pop - O(1)
 * shift/unshift/concat/slice/splice - O(N)  (need to arrange the indexes)
 * access - O(1)
 * search - O(N)
 * forEach, map, filter, reduce - O(N) but in the scenarion where callback function also contains for loop, TC will be quadratic O(N^2)
 */