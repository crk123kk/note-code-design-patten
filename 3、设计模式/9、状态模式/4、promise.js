class Promise {
  constructor(fn) {
    // 维护一个初始状态
    this.state = 'initial';
    this.successes = [];
    this.errors = [];
    let resovle = (data) => {
      this.state = 'fulfilled';
      this.successes.forEach((item) => item(data));
    };
    let reject = (error) => {
      this.state = 'failed';
      this.errors.forEach((item) => item(error));
    };
    fn(resovle, reject);
  }
  then(success, error) {
    this.successes.push(success);
    this.errors.push(error);
  }
}
let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let num = Math.random();
    if (num > 0.5) {
      resolve(num);
    } else {
      reject(num);
    }
  }, 1000);
});

p.then(
  (data) => {
    console.log('成功', data);
  },
  (error) => {
    console.log('失败', error);
  }
);
