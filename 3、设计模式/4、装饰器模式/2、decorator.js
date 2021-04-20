/**
 * 1、装饰器模式有时候会优于继承
 *
 * 美式咖啡   加糖  加奶  加盐
 *
 * 如果使用继承，那么就会需要创建很多很多个类，然后不同类之间相互继承
 *
 * 但是如果使用装饰器，只要对应有几种口味，就只需要创建几种口味的装饰器
 *
 * 装饰器模式是将一个对象嵌入另一个对象之中，实际上相当于这个对象被另一个对象包装起来，
 * 形成一条包装链·请求随着这条链条依次传递到所有的对象，每个对象有处理这个请求的机会。
 */

class Coffee {
  make(water) {
    return `${water} + 咖啡`;
  }
  cost() {
    return 10;
  }
}

class MilkCoffee {
  constructor(parent) {
    this.parent = parent;
  }
  make(water) {
    return `${this.parent.make(water)} + 奶`;
  }
  cost() {
    return this.parent.cost() + 2;
  }
}

class SugarCoffee {
  constructor(parent) {
    this.parent = parent;
  }
  make(water) {
    return `${this.parent.make(water)} + 糖`;
  }
  cost() {
    return this.parent.cost() + 3;
  }
}

let coffee = new Coffee();
let milkCoffee = new MilkCoffee(coffee);
let sugarCoffee = new SugarCoffee(milkCoffee);
let res = sugarCoffee.make('水');
console.log(res);

let total = sugarCoffee.cost();
console.log('total :>> ', total);
