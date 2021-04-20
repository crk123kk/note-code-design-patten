function Window(name) {
  this.name = name;
}

Window.prototype.getName = function () {
  console.log(this.name);
  return this.name;
};

function Dialog(title, content) {
  this.title = title;
  this.content = content;
}

// 在4.js的基础上进行改进，改进其原型继承的方式
let CreateSingle = function (Constructor) {
  let instance;
  let SingleConstructor = function () {
    if (!instance) {
      Constructor.apply(this, arguments);
      instance = this;
    }
    return instance;
  };
  // 这就是非常典型的原型继承
  SingleConstructor.prototype = Object.create(Constructor.prototype);
  return SingleConstructor;
};
let createWindow = CreateSingle(Window);
let w1 = new createWindow('111');
w1.getName();
let w2 = new createWindow('222');
console.log(w1 === w2);

let createDialog = CreateSingle(Dialog);
let d1 = new createWindow('111');
let d2 = new createWindow('222');
console.log(d1 === d2);
