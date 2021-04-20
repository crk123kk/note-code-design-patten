/**
 * 将代码的实现依赖于 模块 而不是再依赖于代码 实现（配置）
 * 我们只需要关注引入对应的模块，而模块内部的代码更改不会影响到我们对代码的引用
 */

let apple = require('./apple').create();
let orange = require('./orange').create();

console.log('apple :>> ', apple);
console.log('orange :>> ', orange);
