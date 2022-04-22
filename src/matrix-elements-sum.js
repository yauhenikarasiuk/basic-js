const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrixes) {
  let sum = 0;
  matrixes.forEach((matrix, matrixIndex) => {
    matrix.forEach((value, index) => {
      if(matrixIndex == 0 || matrixes[matrixIndex-1][index] != 0){
        sum += value;
      }
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
