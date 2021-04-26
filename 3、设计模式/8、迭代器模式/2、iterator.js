Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback.call(this, this[i], i, this);
  }
};

let arr1 = [1, 2, 3];
arr1.forEach2((item, idx, arr) => {
  console.log(item, idx, arr);
});
