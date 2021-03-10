const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.addition === undefined) options.addition = ""; 
  if(options.separator === undefined) options.separator = "+"; 
  if(options.additionSeparator === undefined) options.additionSeparator = "|"; 
  if(options.repeatTimes === undefined) options.repeatTimes = 1; 
  if(options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1; 
  str = "" + str;
  options.addition = "" + options.addition;
  let temp = "";
  for(let i = 0; i < options.repeatTimes; i++) {
    temp += str;
    for(let j = 0; j < options.additionRepeatTimes; j++) {
      temp += options.addition;
      if(j < options.additionRepeatTimes - 1) temp += options.additionSeparator;
    }
    if(i < options.repeatTimes - 1) temp += options.separator;
  }
  return temp;
};
  