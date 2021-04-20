class Power {
  charge() {
    return '220V';
  }
}

/**
 * 适配器
 */
class Adaptor {
  constructor() {
    this.power = new Power();
  }
  charge() {
    let v = this.power.charge();
    return `${v} => 12V`;
  }
}

class Notepad {
  constructor() {
    this.adaptor = new Adaptor();
  }
  use() {
    console.log(this.adaptor.charge());
  }
}

let notepad = new Notepad();
notepad.use();
