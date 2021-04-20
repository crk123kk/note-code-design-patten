/**
 * 当串行连续读取三个文件的内容
 * 最开始：
 *      通过回调函数的方式，但是这样的回调函数的方式的回调炼狱让人很难接受，并且没办法使用 async来调用
 * 适配器
 *      通过适配器将原本的fs.readeFile方法转换成返回promise对象的readFile的方法
 */

const fs = require('fs');

function promisify(fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      fn(...args, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}

// 适配器转换
let readFile = promisify(fs.readFile);
(async function read() {
  let one = await readFile('1.txt', 'utf8');
  let two = await readFile('2.txt', 'utf8');
  let three = await readFile('3.txt', 'utf8');
  console.log(one, two, three);
})();
