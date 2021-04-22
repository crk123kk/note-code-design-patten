class Promise {
  constructor(fn) {
    this.successes = [];
    let resolve = (data) => {
      this.successes.forEach((item) => item(data));
    };
    fn(resolve);
  }
  then(success) {
    this.successes.push(success);
  }
}

let p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('ok');
  }, 2000);
});
p.then((data) => console.log(data));
