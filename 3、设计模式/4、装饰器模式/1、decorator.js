class Duck {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    console.log(`吃${food}`);
  }
}

/**
 * TangDuck就是一个装饰器，在原有Duck的基础上装饰（扩展功能）
 * 和适配器不同的是，装饰器是在原有功能基础上扩展的，对原有功能的改变不大
 */
class TangDuck {
  constructor(name) {
    this.duck = new Duck(name);
  }
  eat(food) {
    this.duck.eat(food);
    console.log('谢谢');
  }
}

let t = new TangDuck('唐老鸭');
t.eat('苹果');
