/**
 * 在 java 中，单例模式的 构造函数也是private的，而获取实例的方法是public的
 * 因此：不可以通过new来获取这个实例，只能通过对应的get方法获取实例
 *
 * 单例模式这样做的原因在于，通过对应的get方法获取到的实例都是同一个实例
 */

/**
 * ES5 写法
 */

// function Window(name) {
//   this.name = name;
// }

// Window.prototype.getName = function () {
//   return this.name;
// };

// // 类上的方法，只可以通过类来访问，不可以通过实例来访问
// Window.getInstance = (function () {
//   let instance;
//   return function (name) {
//     if (!instance) {
//       instance = new Window(name);
//     }
//     return instance;
//   };
// })();

/**
 * ES6 写法
 */
class Window {
  constructor(name) {
    this.name = name;
  }
  // 类上的方法，只可以通过类来访问，不可以通过实例来访问
  static getInstance() {
    if (!this.instance) {
      this.instance = new Window();
    }
    return this.instance;
  }
}

let w1 = Window.getInstance();
let w2 = Window.getInstance();
console.log(w1 === w2);
