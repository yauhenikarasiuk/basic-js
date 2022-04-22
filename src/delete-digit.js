const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayOfNumbers = Array.from(n.toString());
  let variants = arrayOfNumbers.map((value, index)=>{
    let count = Array.from(arrayOfNumbers);
    count.splice(index, 1);
    return parseInt(count.join(''));
  });
  return Math.max(...variants);
}

module.exports = {
  deleteDigit
};
