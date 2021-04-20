/**
 * 简单工厂方法违背了 设计原则
 * 开闭原则：对修改关闭，对扩展开放：如果是简单工厂模式的话，当我需要新增类目的时候，需要修改到老的工厂方法
 */

class Plant {
  constructor(name) {
    this.name = name;
  }
}

class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

/**
 * 工厂父类一般是接口，规定子类必须实现的方法
 * 依赖抽象，而不依赖实现，即：这个工厂只是提供子类的抽象的 "规范",而没有内部的具体实现，具体实现是子类的工作
 */
class Factory {
  static create() {}
}

class AppleFactory extends Factory {
  static create() {
    return new Apple();
  }
}

class OrangeFactory extends Factory {
  static create() {
    return new Orange();
  }
}

/**
 * 使用工厂方法模式的话，当我们需要扩展一个类目的时候，解决了简单工厂的弊端
 * 只需要新增对应的工厂方法即可，不需要修改到原来的工厂方法
 */
// let apple = AppleFactory.create();
// let orange = OrangeFactory.create();

/**
 * 工厂方法模式一般会和配置对象配合
 */
let settings = {
  apple: AppleFactory,
  orange: OrangeFactory,
};
let apple = settings['apple'].create();
let orange = settings['orange'].create();

/**
 * 工厂方法模式还可以将各个工厂抽象成一个个文件，这样可以让组织更加明确并且让代码的耦合降低
 */
