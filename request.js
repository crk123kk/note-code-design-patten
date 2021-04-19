function checkStatus(response) {
  if (response.code >= 200 && response.code < 300) {
    return response;
  } else {
    throw new Error('响应结果不正确');
  }
}

function checkCode(data) {
  if (data.code == 0) {
    return data;
  } else {
    throw new Error('');
  }
}

// 把响应体转换成json
function parseJson(response) {
  return response.json();
}

/**
 * 单一职责，虽然也会修改原有代码，但是是链式调用，只需要这么加上去即可
 * 其他的方法都是单一职责，需要或不需要只要移除或者添加即可
 */
function request(url, options) {
  /**
   * 1、判断响应的状态码是不是2xx，如果不是的话则返回错误信息
   * 2、把响应体转换成JSON对象
   */

  fetch(url, options)
    .then(checkStatus)
    .then(parseJson)
    .then(checkCode)
    .then(parseJson);
}
