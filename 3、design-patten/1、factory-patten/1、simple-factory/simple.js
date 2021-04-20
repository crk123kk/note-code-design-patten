/**
 * 简单工厂模式封装了代码实现，降低了代码耦合
 *
 * // 普通方式
 * let a = new VNode(); // 这是使用者直接调用了
 * // 简单工厂模式
 * let a = createElement(); // 虽然在createElement中也只是return一个VNode
 * 但是他封装了这个方法的实现，并且不管内部VNode中如何变化，设置VNode编程了VVNode这样，也不会影响
 * createElement的调用，但是普通方式的调用就会受到影响（耦合太大）
 */

class Plant {
  constructor(name) {
    this.name = name;
  }
  grow() {
    console.log('growing');
  }
}

class Apple extends Plant {
  constructor(name) {
    super(name);
    this.taste = '甜';
  }
}

class Orange extends Plant {
  constructor(name) {
    super(name);
    this.taste = '酸';
  }
}

class Factory {
  static create(name) {
    switch (name) {
      case 'apple':
        return new Apple('苹果');

      case 'orange':
        return new Apple('橘子');
    }
  }
}

// 直接new有什么缺点？
// 1、耦合太大  2、依赖具体实现,需要知道具体实现，即如果我要获取一个apple则要new Apple
let app = new Apple();
// 但是 简单工厂模式不会，简单工厂模式，只要你传入具体的内容
// 哪怕你不知道工厂内部如何实现的，并且工厂内部不管做了怎么样的改变，比如Apple移除了，
// 你调用的方式工厂模式的方式仍然是通过create的方式
let a = Factory.create('apple');
