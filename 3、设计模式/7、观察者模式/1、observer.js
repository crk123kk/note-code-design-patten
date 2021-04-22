/**
 * 明星：被观察者
 * 内部维护一个粉丝群：观察者数组
 * 当状态变化的时候需要通知粉丝：让观察者数组中进行更新状态
 */
class Star {
  constructor(name) {
    this.name = name;
    this.state = '';
    // 粉丝、观察者
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObervers();
  }
  // 粉丝增加 ： 添加新的观察者
  attach(observer) {
    this.observers.push(observer);
  }
  // 通知粉丝自己的状态：通知所有的观察者更新自己
  notifyAllObervers() {
    if (this.observers.length > 0) {
      this.observers.forEach((observer) => observer.update());
    }
  }
}

/**
 * 粉丝：观察者
 * 当粉丝创建的时候，必然会有一个粉的明星：即会将自己添加到被观察者中
 * 内部有个update方法，当明星（被观察者）状态变更通知观察者的时候，观察者会进行更新update
 */
class Fan {
  constructor(name, star) {
    this.name = name;
    this.star = star;
    // 观察者把自己加入到被观察者中去
    this.star.attach(this);
  }
  update() {
    console.log(`我的明星改变了${this.star.getState()}`);
  }
}

let star1 = new Star('baby');
let fan1 = new Fan('crk', star1);
star1.setState('hahah');
