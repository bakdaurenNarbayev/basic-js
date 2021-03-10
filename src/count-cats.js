const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // remove line with error and write your code here
  if(backyard === undefined) return 0;
  let number = 0;
  for(let i = 0; i < backyard.length; i++) {
    for(let j = 0; j < backyard[i].length; j++) {
      number += backyard[i][j] === "^^";
    }
  }
  return number;
};
