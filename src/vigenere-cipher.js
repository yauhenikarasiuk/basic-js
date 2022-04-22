const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect){
    if(isDirect != false){
      this.isDirect = true;
    }
    this.sequence = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(string, key) {
    if(!string || !key){
      throw new Error('Incorrect arguments!');
    }
    string = string.toLowerCase();
    key = key.toLowerCase();
    let longKey = this.convertKey(string, key);
    let result = Array.from(string).map((char, index)=>{
      if(longKey[index] == ' '){
        return char;
      }
      let stringIndex = this.convertToIndex(char);
      let keyIndex = this.convertToIndex(longKey[index]);
      let cipherIndex = (stringIndex + keyIndex) % 26;
      return this.convertToChar(cipherIndex).toUpperCase();
    });
    if(!this.isDirect){
      return result.reverse().join('');
    }else{
      return result.join('');
    }
  }

  decrypt(string, key) {
    if(!string || !key){
      throw new Error('Incorrect arguments!');
    }
    string = string.toLowerCase();
    key = key.toLowerCase();
    let longKey = this.convertKey(string, key);
    let result = Array.from(string).map((char, index)=>{
      if(longKey[index] == ' '){
        return char;
      }
      let stringIndex = this.convertToIndex(char);
      let keyIndex = this.convertToIndex(longKey[index]);
      let cipherIndex = (stringIndex - keyIndex + 26) % 26;
      return this.convertToChar(cipherIndex).toUpperCase();
    });
    if(!this.isDirect){
      return result.reverse().join('');
    }else{
      return result.join('');
    }
  }

  convertToIndex(value){
    return this.sequence.indexOf(value);
  }

  convertToChar(value){
    return this.sequence.charAt(value);
  }

  convertKey(string, key){
    let index = 0;
    let result = '';
    Array.from(string).forEach((stringChar) => {
      if(this.sequence.indexOf(stringChar) == -1){
        result += ' ';
        return;
      }
      if(index > key.length - 1){
        index = 0;
      }
      result += key[index];
      index++;
    });
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};