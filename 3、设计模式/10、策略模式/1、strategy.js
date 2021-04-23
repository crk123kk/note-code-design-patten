class Customer {
  constructor(type) {
    this.type = type;
  }
  /**
   * 根据不同的类型type采取不同的策略，但是这里有太多的if-else需要优化
   */
  pay(amount) {
    if (this.type == 'member') {
      return amount * 0.9;
    } else if (this.type === 'vip') {
      return amount * 0.8;
    } else {
      return amount;
    }
  }
}

let customer = new Customer('vip');
console.log(customer.pay(100));
