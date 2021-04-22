class Battery {
  constructor() {
    this.amount = 'high';
  }
  show() {
    if (this.amount === 'high') {
      console.log('电量充足，绿色');
      this.amount = 'middle';
    } else if (this.amount === 'middle') {
      console.log('电量中等，黄色');
      this.amount = 'low';
    } else if (this.amount === 'low') {
      console.log('电量不足，红色');
    }
  }
}
let battery = new Battery();
battery.show();
battery.show();
battery.show();
