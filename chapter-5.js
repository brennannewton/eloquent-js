/*
 * Chapter 5 Exercies
 * Brennan Newton
 */

const SCRIPTS = require('./scripts.js');

// Flattening
/* Use the reduce method in combination with the concat method to “flatten” an
 * array of arrays into a single array that has all the elements of the
 * original arrays.
 */
function flatten(listOfLists) {
  return listOfLists.reduce(
    (listSoFar, currList) => listSoFar.concat(currList),
    []
  );
}

// const arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]

// Your Own Loop
/* Write a higher-order function loop that provides something like a for loop
 * statement. It takes a value, a test function, an update function, and a body
 * function. Each iteration, it first runs the test function on the current
 * loop value and stops if that returns false. Then it calls the body function,
 * giving it the current value. Finally, it calls the update function to create
 * a new value and starts from the beginning.
 */
function loop(val, test, update, body) {
  for (let i = val; test(i); i = update(i)) {
    body(i);
  }
}

// loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Everything
/* Analogous to the some method, arrays also have an every method. This one
 * returns true when the given function returns true for every element in the
 * array. In a way, some is a version of the || operator that acts on arrays,
 * and every is like the && operator.
 * Implement every as a function that takes an array and a predicate function
 * as parameters. Write two versions, one using a loop and one using the some
 * method.
 */
function everyLoop(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (!test(array[i])) return false;
  }
  return true;
}

function everySome(array, test) {
  return !array.some(item => !test(item));
}

// console.log(everyLoop([1, 3, 5], n => n < 10));
// console.log(everySome([1, 3, 5], n => n < 10));
// → true
// console.log(everyLoop([2, 4, 16], n => n < 10));
// console.log(everySome([2, 4, 16], n => n < 10));
// → false
// console.log(everyLoop([], n => n < 10));
// console.log(everySome([], n => n < 10));
// → true

// Dominant Writing Direction
/* Write a function that computes the dominant writing direction in a string of
 * text. Remember that each script object has a direction property that can be
 * "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
 */
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection('Hello!'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
