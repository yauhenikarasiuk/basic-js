const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeats = new Array(options.repeatTimes || 1);
  if(options.hasOwnProperty('addition')){
    let addition = new Array(options.additionRepeatTimes ? options.additionRepeatTimes : 1);
    addition.fill(options.addition + '');
    str += addition.join(options.additionSeparator || '|');
  }
  repeats.fill(str);
  return repeats.join(options.separator || '+');
}

module.exports = {
  repeater
};
