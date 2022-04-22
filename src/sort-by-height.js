const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let clearedArray = Array.from(arr).map(value => value == -1 ? value : null);
  Array.from(arr).filter(value => value != -1).sort((a,b)=> a-b).forEach((value)=>{
    let firstEmptyIndex = clearedArray.indexOf(null);
    clearedArray[firstEmptyIndex] = value;
  });
  return clearedArray;
}

module.exports = {
  sortByHeight
};
