let Plant = require('./plant');
let Factory = require('./factory');

class Apple extends Plant {
  constructor(name, flavour) {
    super(name);
    this.flavour = flavour;
  }
}

class AppleFactory extends Factory {
  static create() {
    return new Apple('čšć', 'ç');
  }
}

module.exports = AppleFactory;
