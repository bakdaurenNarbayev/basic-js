const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  res = "";
  if(members === undefined || members === null) return false;
  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] === "string") {
      res += members[i].trim()[0].toUpperCase();
    }
  }
  if(res.length === 0) return false;
  else return res.split("").sort().join("");
};
