// objects - unstructured data arranged in key value pairs

// to create an object in a simplest way

const obj = {
  name: 'Pratima',
  age: 27,
  job: "Software Engineer",
  dummy: 123,
  key_frame: 567,
  sayMyName: function () {
    console.log(this.name, "Name");
  }
}

obj.newKey = "New Value";    // insert new key value pair

delete obj.newKey;    // deletes the key value pair

obj.sayMyName();

console.log(obj);

console.log(obj['key_frame']);



// Time Complexity

/** 
 * Insert/Remove  - O(1)
 * Access - O(1)
 * Search - O(n)
 * 
 * Object.keys(), Object.values(),Object.entries() - O(N)
 * 
 * 
 * 
 */

