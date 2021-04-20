let Plant = require('./plant');
let Factory = require('./factory');

class Orange extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class OrangeFactory extends Factory {
  static create() {
    return new Orange('橘子', '酸');
  }
}

module.exports = OrangeFactory;
