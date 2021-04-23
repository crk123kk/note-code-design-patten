function Person() {}
/**
 * 函数也是对象
 */
console.log(Person instanceof Object);

let p1 = new Person();

/**
 * 对象都是通过函数创建的
 */
let obj = { name: '1111' };
// 等同于
let obj1 = new Object();
obj1.name = '2222';

// function sum(a, b) {
//   return a + b;
// }
// 等同于
// 可以说上面的形式是下面的语法糖
// 函数的本质就是对象
let sum = new Function('a', 'b', 'return a+b');
console.log(sum(1, 2));

/**
 * instanceof 判断 A B 最终通过原型链是否指向同一个对象
 * A.__proto__  B.prototype
 */
console.log(Object instanceof Function);
console.log(Function instanceof Object);
console.log(Object instanceof Function);
