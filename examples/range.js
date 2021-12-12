/**
 * Making an equivalent to Python's range()
 * @param {number} a Lower inclusive bound
 * @param {number} b Upper exclusive bound
 * @returns Array of numbers in the range specified, including the smaller number but excluding the larger number.
 */
const range = (a, b) => {
  return Array(b - a) // ************** Create an array of size b-a
    .fill(0) // *********************** Fill array with numbers so map can iterate
    .map((_, index) => a + index); // * Map function provides index as second parameter to callback function
};

range(3, 7).forEach((element) => {
  console.log(element);
});
