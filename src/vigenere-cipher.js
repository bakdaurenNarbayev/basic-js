const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    if(typeof value === "boolean") this.value = value;
    else this.value = true;
  }
  encrypt(msg, key) {
    if(msg === undefined || key === undefined) throw new Error();
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let temp = "";
    let j = 0;
    for(let i = 0; i < msg.length; i++) {
      if(msg[i] < 'A' || msg[i] > 'Z') temp += msg[i];
      else {
        temp += String.fromCharCode(((msg[i].charCodeAt(0) - 65) + (key[j % key.length].charCodeAt(0) - 65)) % 26 + 65);
        j++;
      }
    }
    if(this.value) return temp;
    else return temp.split("").reverse().join("");
  }
  decrypt(msg, key) {
    if(msg === undefined || key === undefined) throw new Error();
    msg = msg.toUpperCase();
    key = key.toUpperCase();
    let temp = "";
    let j = 0;
    for(let i = 0; i < msg.length; i++) {
      if(msg[i] < 'A' || msg[i] > 'Z') temp += msg[i];
      else {
        temp += String.fromCharCode((msg[i].charCodeAt(0) - 65 - (key[j % key.length].charCodeAt(0) - 65) + 104) % 26 + 65);
        j++;
      }
    }
    if(this.value) return temp;
    else return temp.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
