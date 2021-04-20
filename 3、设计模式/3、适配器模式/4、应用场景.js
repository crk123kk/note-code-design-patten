/**
 * 原本项目用的是 jquery的 ajax方法
 * 但是新项目不想用jquery了，这时候如果把jquery移除了。。那么除了将所有使用jqery的方法改变之外
 * 还可以通过适配器的方式来将 $.ajax的方法转换成需要用到的方法
 */

// let $ = require('jQuery');

// 适配器： 将老的方法（使用jquery）转换成使用 fetch的方法，这样就不用改所有的方法
// 这样当我们想把老代码改成fetch就不用改 原来的代码，而是直接重写这个方法，将其适配成用fetch方法
window.$ = {
  ajax(options) {
    return fetch(options.url, {
      method: options.type || 'GET',
      body: JSON.stringify(options.data || {}),
    }).then((response) => response.json());
  },
};

$.ajax({
  url,
  type: 'POST',
  dataType: 'json',
  data: { id: 1 },
}).then(function (data) {
  console.log(data);
});
