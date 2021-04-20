/**
 * 透明单例违反了单一职责问题
 * 在透明单例中不仅实现了单例模式还创建了对象
 */

// 把类的实例的创建逻辑和单例逻辑分开
function Window(name) {
  this.name = name;
}

Window.prototype.getName = function () {
  return this.name;
};

let CreateSingle = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new Window(name);
    }
    return instance;
  };
})();

let w1 = new CreateSingle('111');
let w2 = new CreateSingle('222');
console.log(w1 === w2);
