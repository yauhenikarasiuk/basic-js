const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrixes) {
  return matrixes.map((row, rowIndex)=>{
    return row.map((column, columnIndex)=>{
      let counter = 0;
      for(let x = -1; x < 2; x++){
        for(let y = -1; y < 2; y++){
            debugger;
          if(!matrixes[rowIndex + x] || (x == 0 && y == 0)){
            continue;
          }
          if(matrixes[rowIndex + x][columnIndex + y]){
            counter++;
          }
        }
        
      }
        return counter;
    });
  })
}
module.exports = {
  minesweeper
};
