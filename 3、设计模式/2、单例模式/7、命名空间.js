// 1、变量名冲突
// 2、复杂层次对象的可读性要求
// jquery 并没有吧变量都声明到window中，而是都挂载到 $ 对象上
let $ = {};
$.define = function (namespace, fn) {
  let namespaces = namespace.split('.');
  let fnName = namespaces.pop();
  let current = $;
  for (let i = 0; i < namespaces.length; i++) {
    let namespace = namespaces[i];
    if (!current[namespace]) {
      current[namespace] = {};
    }
    current = current[namespace];
  }
  current[fnName] = fn;
};

$.define('dom.class.addClass', function () {
  console.log('dom.class.addClass');
});
$.define('string.attr', function () {
  console.log('string.attr');
});

$.dom.class.addClass();
$.string.attr();
