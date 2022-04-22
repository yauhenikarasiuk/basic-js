const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    if(Array.isArray(arr)){
      if(arr.length == 0){
          return 1;
      }
      let subArrays = arr.map(this.calculateDepth.bind(this));
      result = 1 + Math.max(...subArrays);
    }
    return result;
  }
}

module.exports = {
  DepthCalculator
};
