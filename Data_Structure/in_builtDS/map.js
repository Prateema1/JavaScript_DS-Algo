/** 
 * 
 * ordered collection of elements in key value pairs
 * key and value can be of any data type
 * 
 * objects vs maps
 * objects are unordered where maps are ordered
 * keys in objects can only be a string or a symbol but map can have of any data type
 * objects contain prototype which can have its own default key that may collide with your own key if not careful but maps dont have any default keys
 * 
 * number of items in objects must be determined manually but in set is has size property.
 * 
 * we can attach functionality also in objects but in map we can only store data
 * 
 */

const map = new Map([['a', 1], ['b',2]]); // optionally accepts array as argument

map.set('c', 3);

console.log(map.has('a'));

for(let [key,value] of map) {
  console.log(`${key}: ${value}`);
}

map.delete('a');

console.log(map);

console.log(map.size)

map.clear();

console.log(map);