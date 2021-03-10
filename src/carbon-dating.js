const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" || sampleActivity === undefined || isNaN(parseFloat(sampleActivity))) return false;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / 0.693 * HALF_LIFE_PERIOD);
  if(typeof t !== "number" || t === undefined || isNaN(t) || !isFinite(t) || t < 0) return false;
  else return t;
};
