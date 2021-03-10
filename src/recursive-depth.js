const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 0;
    if(!(arr instanceof Array)) return res;
    for(let i = 0; i < arr.length; i++) {
      res = Math.max(res, this.calculateDepth(arr[i]));
    }
    return res + 1;
  }
};