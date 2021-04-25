class Person {
  dinner() {
    this.buy();
    this.cook();
    this.eat();
  }
  buy() {
    throw new TypeError('必须由子类实现');
  }
  cook() {
    throw new TypeError('必须由子类实现');
  }
  eat() {
    throw new TypeError('必须由子类实现');
  }
}

/**
 * 父类规定抽象模板，将具体实现延迟到子类中
 */
class CRK extends Person {
  buy() {
    console.log('买买买');
  }
  cook() {
    console.log('煮煮煮');
  }
  eat() {
    console.log('吃吃吃');
  }
}

let crk = new CRK();
crk.dinner();
