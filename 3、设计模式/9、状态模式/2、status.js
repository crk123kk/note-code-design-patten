class SuccessState {
  show() {
    console.log('电量充足，绿色');
  }
}

class WarningState {
  show() {
    console.log('电量中等，黄色');
  }
}

class ErrrorState {
  show() {
    console.log('电量不足，红色');
  }
}

class Battery {
  constructor() {
    this.amount = 'high';
    // 维护一个状态的变量
    this.state = new SuccessState();
  }
  show() {
    // 把显示逻辑委托给了状态对象
    this.state.show();
    // 内部仍旧需要维护状态的变化
    if (this.amount === 'high') {
      this.amount = 'middle';
      this.state = new WarningState();
    } else if (this.amount === 'middle') {
      this.amount = 'low';
      this.state = new ErrrorState();
    }
  }
}

/**
 * 这里将状态和状态对应的业务逻辑解耦
 * 将业务逻辑放到维护的状态的对象上去
 * 虽然这里amount和state表示的都是某种状态的含义，但是这里amount是实际状态
 * 而state是通过状态来维护状态对应的业务逻辑代码行为，通过显示的声明状态，然后调用状态对应的业务逻辑
 * 从而实现切换状态从而改变行为
 */
let battery = new Battery();
battery.show();
battery.show();
battery.show();
