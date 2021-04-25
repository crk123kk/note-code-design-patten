function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

/**
 * p1、p2是共享getName和getAge方法的
 */
let p1 = new Person();
let p2 = new Person();
