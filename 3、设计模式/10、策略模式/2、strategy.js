/**
 * 在 1、strategy.js的基础上进行优化
 */

class Customer {
  constructor(kind) {
    this.kind = kind;
  }
  pay(amount) {
    return this.kind.pay(amount);
  }
}

class Normal {
  pay(amount) {
    return amount;
  }
}
class Member {
  pay(amount) {
    return amount * 0.9;
  }
}
class VIP {
  pay(amount) {
    return amount * 0.8;
  }
}

let c = new Customer(new VIP());
console.log(c.pay(100));
c.kind = new Member();
console.log(c.pay(100));
