const { useFakeServer } = require('sinon');
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let stats = {};
  for(domain of domains){
    let paths = domain.split('.').reverse();
    for(let i = 0; i < paths.length; i++){
      let path = '.' + paths.filter((value,index)=> index<=i).join('.');
      if(stats[path] == undefined){
        stats[path] = 1;
      } else {
        stats[path]++;
      }
    }
  }
  return stats;
}

module.exports = {
  getDNSStats
};
