/**
 * 要让代码支持 decorators需要安装webpack插件，这样编译的时候才可以实现装饰器功能
 *
 * plugins
 *  @babel/plugin-proposal-decorators
 *  @babel/plugin-proposal-class-properties
 */

/**
 * 类 decorators
 */

// @testable
// class Person {}
// function testable(target) {
//   target.testable = true;
// }
// console.log(Person.testable);

/**
 * Hooks：最终会打印出
 * componentWillMount
 * c
 * componentDidMount
 */
// let Hooks = {
//   componentWillMount() {
//     console.log('componentWillMount');
//   },
//   componentDidMount() {
//     console.log('componentDidMount');
//   },
// };
// function mixins(...others) {
//   return function (target) {
//     Object.assign(target.prototype, ...others);
//   };
// }
// @mixins(Hooks)
// class Component {}
// let c = new Component();
// console.log(c);

/**
 * 方法 decorators
 */

// function readonly(target, attr, descriptor) {
//   descriptor.writable = false;
// }
// class Circle {
//   @readonly
//   PI = 3.14;
// }
// let c = new Circle();
// c.PI = 100;
// console.log(c.PI);

/**
 * log
 */

// function logger(target, attr, descriptor) {
//   let oldVal = descriptor.value;
//   descriptor.value = function (...args) {
//     console.log(`参数：${args}`);
//     return oldVal(...args);
//   };
// }
// class Caulator {
//   @logger
//   sum(a, b) {
//     return a + b;
//   }
// }

// let c = new Caulator();
// let ret = c.sum(1, 2);
// console.log(ret);
