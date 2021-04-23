function Person(name) {
  this.name = name;
}

/**
 * 使得资源可以复用
 */
Person.prototype.getName = function () {
  console.log(this.name);
};

let p1 = new Person('1111');
let p2 = new Person('2222');
console.log(p1.getName == p2.getName);
