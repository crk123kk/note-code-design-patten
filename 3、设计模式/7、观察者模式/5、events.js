// let EventEmitter = require('events');

class EventEmitter {
  constructor() {
    this._events = {};
  }
  on(type, listener) {
    let listeners = this._events[type];
    if (listeners) {
      listeners.push(listener);
    } else {
      this._events[type] = [listener];
    }
  }
  emit(type) {
    let listeners = this._events[type];
    let args = Array.prototype.slice.call(arguments, 1);
    if (listeners) {
      listeners.forEach((l) => l(...args));
    }
  }
}

let eve = new EventEmitter();
eve.on('click', function (name) {
  console.log(1111, name);
});

eve.emit('click', 'aaaa');
