
// You should implement your task here.

module.exports = function towelSort (matrix) {
 return matrix ? matrix.flatMap((elem, ind) => ind%2 ? elem.reverse() : elem) : [];
 
   // console.log(matrix);
}
