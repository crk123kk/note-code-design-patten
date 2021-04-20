class Sum {
  sum(a, b) {
    return a + b;
  }
}
class Minus {
  minus(a, b) {
    return a - b;
  }
}
class Multiply {
  multiply(a, b) {
    return a * b;
  }
}
class Divide {
  divide(a, b) {
    return a / b;
  }
}

class Calculator {
  constructor() {
    this.sumFactory = new Sum();
    this.minusFactory = new Minus();
    this.multiplyFactory = new Multiply();
    this.divideFactory = new Divide();
  }

  sum(a, b) {
    return this.sumFactory.sum(a, b);
  }

  minus(a, b) {
    return this.minusFactory.minus(a, b);
  }

  multiply(a, b) {
    return this.multiplyFactory.multiply(a, b);
  }

  divide(a, b) {
    return this.divideFactory.divide(a, b);
  }

  addAndMinus(a, b, c) {
    return this.minus(this.sum(a, b), c);
  }
}

// 外观模式：使用者不需要知道内部的具体实现到底是什么，有多么麻烦，只需要调用提供的接口实现对应的功能即可
let calculator = new Calculator();
console.log(calculator.sum(1, 2));
console.log(calculator.addAndMinus(1, 3, 2));
