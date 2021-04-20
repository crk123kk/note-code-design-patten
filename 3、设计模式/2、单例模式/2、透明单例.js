/**
 * 之前普通单例方式实现单例存在以下问题
 * 1、我们使用这个类创建实例需要主动调用getInstance方法
 * 2、并不能真正组织使用者通过直接new Window创建实例
 */

// 透明单例

let Window = (function () {
  let window;
  let Window = function (name) {
    if (window) {
      return window;
    } else {
      this.name = name;
      return (window = this);
    }
  };
  return Window;
})();

// 需要注意，这里的 Window得到的是 自执行函数中返回的 Window 方法，而这个Window方法通过闭包共用一个window变量
console.log(Window);
/**
 * 通过 new 调用函数的时候
 *  1、创建一个对象
 *  2、将this指向这个对象
 *
 * 因此当我们通过new 调用 Window的时候，一开始的window是没有值的，所以进入else，然后将this指向window，
 * 第二次进入则
 */
let w1 = new Window();
let w2 = new Window();
console.log(w1 === w2);
