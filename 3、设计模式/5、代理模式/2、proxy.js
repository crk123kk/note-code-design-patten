/**
 * cache 缓存
 */

// n = 4  ==>  1！ + 2！ + 3！ + 4！

// function multi(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * multi(n - 1);
//   }
// }

// let sum = function (n) {
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += multi(i);
//   }
//   return result;
// };

/**
 * 使用代理缓存
 */

let sum = (function () {
  let cache = {};

  function multi(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * (cache[n - 1] || multi(n - 1));
    }
  }

  return function (n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      let ret = multi(i);
      cache[i] = ret;
      result += ret;
    }
    return result;
  };
})();

let result = sum(100);
console.time('cost');
console.log('result :>> ', result);
console.timeEnd('cost');
