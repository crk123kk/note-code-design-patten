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

let CreateSingle = function (Constructor) {
  let instance;
  return function () {
    if (!instance) {
      instance = new Constructor(...arguments);
    }
    return instance;
  };
};
let createWindow = CreateSingle(Window);
let w1 = new createWindow('111111');
w1.getName();
let w2 = new createWindow('222');
console.log(w1 === w2);

let createDialog = CreateSingle(Dialog);
let d1 = new createWindow('111');
let d2 = new createWindow('222');
console.log(d1 === d2);
