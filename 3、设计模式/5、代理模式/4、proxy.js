// function toggle(id) {
//   fetch(`/toggle?id=${id}`).then((res) => res.json());
// }

// todoApp.addEventListener('click', function (event) {
//   let id = event.target.value;
//   toggle(id);
// });

// 防抖处理：或者说通过代理处理，让其有类似防抖的功能
// 这时候传入toggle的就是ids了。。即是多次点击之后的结果集

function toggle(ids) {
  fetch(`/toggle?id=${ids}`).then((res) => res.json());
}

let lazyToggle = (function () {
  let ids = [];
  let timer;
  return function (id) {
    ids.push(id);
    if (!timer) {
      timer = setTimeout(function () {
        toggle(ids.join(','));
        ids = [];
        clearTimeout(timer);
        timer = null;
      }, 2000);
    }
  };
})();

todoApp.addEventListener('click', function (event) {
  let id = event.target.value;
  lazyToggle(id);
});
