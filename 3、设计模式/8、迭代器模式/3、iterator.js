/**
 * ES6 iterator
 */
Array[Symbol.iterator] = function () {
  let index = 0;
  let that = this;
  return {
    next() {
      return index < that.length
        ? { value: that[index++] }
        : { value: undefined, done: true };
    },
  };
};
let arr = [1, 2, 3];
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// Map Set String argument NodeList 都有一个Symbol.iterator的属性
// 调用其方法可以返回一个迭代器

let str = 'abc';
let it2 = str[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
