class Customer {
  constructor() {
    this.kinds = {
      normal: function (amount) {
        return amount;
      },
      member: function (amount) {
        return amount * 0.9;
      },
      vip: function (amount) {
        return amount * 0.8;
      },
    };
  }
  pay(kind, amount) {
    return this.kinds[kind](amount);
  }
}

let c = new Customer();
console.log(c.pay('vip', 100));
