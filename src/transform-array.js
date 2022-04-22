const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(Array.isArray(arr))){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  let tempArray = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == '--discard-next' && arr[i+2] == '--double-prev'){
      i += 2;
      continue;
    }
    if(arr[i] == '--discard-next' && arr[i+2] == '--discard-prev'){
      i += 2;
      continue;
    }
    tempArray.push(arr[i]);
  }
  arr = tempArray;
  for(let i = 0; i < arr.length; i++){
    let value = arr[i];
    switch(value){
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        result.pop();
        break;
      case '--double-next':
        if(arr[i+1])
          result.push(arr[i+1]);
        break;
      case '--double-prev':
        if(arr[i-1])
          result.push(arr[i-1]);
        break;
      default:
        result.push(value);
    }
  }
  return result;
}

module.exports = {
  transform
};
