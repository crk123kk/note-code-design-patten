/**
 * 参数的适配
 * 返回值的适配
 */

function ajax(options) {
  let defaultOptions = {
    method: 'GET',
    dataType: 'json',
  };
  // 参数的适配
  for (let attr in options) {
    defaultOptions[attr] = options[attr] || defaultOptions[attr];
  }
}

function transform(str) {
  return JSON.parse(str);
}

ajax({
  url: 'http://www.baidu.com',
  method: 'POST',
  success(str) {
    // 服务器返回的一般是纯的JSON字符串，这时候可以通过适配器转换
    let result = transform(str);
    console.log(result);
  },
});
