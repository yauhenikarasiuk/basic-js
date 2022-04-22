const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let lastResult = null;
  Array.from(str).forEach((value, index)=>{
    if(str[index+1] == value){
      if(lastResult != null){
        lastResult++;
      }else{
        lastResult = 2;
      }
    } else {
      result += lastResult != null ? lastResult + value : value;
      lastResult = null;
    }
  });
  return result;
}

module.exports = {
  encodeLine
};
