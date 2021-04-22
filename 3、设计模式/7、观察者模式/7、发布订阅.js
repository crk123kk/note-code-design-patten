class Agent {
  constructor() {
    this._events = {};
  }
  subscribe(type, listener) {
    let listeners = this._events[type];
    if (listeners) {
      listeners.push(listener);
    } else {
      this._events[type] = [listener];
    }
  }
  publish(type) {
    let listeners = this._events[type];
    let args = Array.prototype.slice.call(arguments, 1);
    if (listeners) {
      listeners.forEach((l) => l(...args));
    }
  }
}

/**
 * 房东
 */
class LandLord {
  constructor(name) {
    this.name = name;
  }
  lend(agent, area, money) {
    agent.publish('house', area, money);
  }
}

/**
 * 租客
 */
class Tenant {
  constructor(name) {
    this.name = name;
  }
  rent(agent) {
    agent.subscribe('house', (area, money) => {
      console.log(area, '==================', money);
    });
  }
}

/**
 * 房东没有直接和租客耦合，而是和中介耦合
 */
let agent = new Agent();
let t1 = new Tenant('111');
let t2 = new Tenant('222');
t1.rent(agent);
t2.rent(agent);
let landLord = new LandLord();
landLord.lend(agent, 60, 5000);
