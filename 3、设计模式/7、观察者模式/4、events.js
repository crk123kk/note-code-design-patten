let EventEmitter = require('events');
let util = require('util');
// let eve = new EventEmitter();
// eve.on('click', function (name) {
//   console.log(1, name);
// });

// eve.emit('click', 'aaaa');

function Bell() {}

// 让Bell继承EventEmitter的特性，从而可是实现发布定于
// util.inherits(Bell, EventEmitter);
Bell.prototype = Object.create(EventEmitter.prototype);
let bell = new Bell();
bell.on('响', function () {
  console.log('开始了');
});
bell.emit('响');

// 在node中 stream 、 http中就经常用到这种形式 on
// 内部封装了方法，当读取到文件或者获取到数据就会触发req.on('data',function(){})
