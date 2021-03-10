const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === undefined) return 'Unable to determine the time of year!';
  else if(date.getMonth() === undefined || date.getTime() === undefined) throw new Error();
  let i =  date.getMonth();
  if(i === 0 || i === 1 || i === 11) return "winter";
  if(i === 2 || i === 3 || i === 4) return "spring";
  if(i === 5 || i === 6 || i === 7) return "summer";
  if(i === 8 || i === 9 || i === 10) return "autumn";
};
