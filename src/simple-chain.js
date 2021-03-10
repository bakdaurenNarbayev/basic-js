const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(value === undefined) value = " ";
    else value = " " + value + " ";
    value = "(" + value + ")";
    if(this.arr.length > 0) {
      value = "~~" + value;
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(this.arr[position - 1] === undefined) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    if(position === 1 && this.arr.length > 0) {
      let temp = this.arr[0].split("");
      temp.splice(0, 2);
      this.arr[0] = temp.join("");
    }
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    if(this.arr.length > 1) {
      let temp = this.arr[0].split("");
      temp.splice(0, 2);
      this.arr[0] = temp.join("");

      this.arr[this.arr.length - 1] = "~~" + this.arr[this.arr.length - 1];
    }
    return this;
  },
  finishChain() {
    let temp = this.arr.join("");
    this.arr = [];
    return temp;
  }
};

module.exports = chainMaker;
