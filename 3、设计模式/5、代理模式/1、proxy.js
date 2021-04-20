class Google {
  get(url) {
    return 'google ' + url;
  }
}
class Proxy {
  constructor() {
    this.google = new Google();
  }
  get(url) {
    return this.google.get(url);
  }
}
let proxy = new Proxy();
let result = proxy.get('sss');

console.log('result :>> ', result);
