// How to determine if the type of data you're working with is really what you think it is

/** Typeof
 *  Best used with primitives. Produces a string describing the type of primitive is returned.
 *
 *  ADVICE: Avoid using for objects. All objects are equal as the 'object' string will be returned for them even if they have different attributes and methods.
 *
 *  WARNING: The new keyword will always create objects. If you apply typeof to a new primitive then it will return an object instead of the primitive.
 *  WARNING: Not a number (NaN) is considered to be of type number.
 *  WARNING: Arrays and regex are considered objects.
 *  WARNING: Class definitions are considered functions
 */

console.log("Typeof Examples");

// Primitive variables return a string with their name
console.log(typeof "a"); // 'string'
console.log(typeof 1); // 'number'

// Objects are all viewed as objects regardless if they're different types of objects
console.log(typeof { a: 1 }); // 'object'
let date = new Date();
console.log(typeof date); // 'object'

// Undefined variables return 'undefined'
console.log(typeof a); // 'undefined'

// new makes an object regardless of the type given to it
console.log(typeof new Number(1)); // 'object'

/** Instanceof
 *  Best used for types. It compares the prototype of the object so it can differentiate objects.
 * Returns true or false if the types match. Can pass in the class definition instead of a variable.
 */

console.log("Instanceof Examples");
console.log({ a: 1 } instanceof Date); // 'object'
date = new Date();
console.log(date instanceof Date); // 'object'
