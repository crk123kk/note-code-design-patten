/**
 * 这样的方法出现的问题在于，如果我 在表单中再加上 password 等字段的时候，就需要改变这个方法体中的内容
 * 这就违背了开放封闭原则：扩展开放、修改封闭
 * 并且也违法了单一职责的原则
 */
function check() {
  let username = document.querySelector('#username').value;
  if (!username || username.length < 6 || username.length > 12) {
    return alert('用户名不合法');
  }
  let email = document.querySelector('#email').value;
  if (
    !email ||
    email.length < 6 ||
    email.length > 12 ||
    email.indexOf('@') == -1
  ) {
    return alert('邮箱不合法');
  }
}

/**
 * 这里就符合了单一职责原则，check2就只是根据validate方法返回对应的校验信息
 *
 * 而对扩展开放，对修改封闭：当我们需要扩展 password的时候，也只需要加个checkPassword的方法即可，而不需要修改到check2中的方法
 */

function check2() {
  let form = document.querySelector('#userform');
  let inputs = form.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    let validate = inputs[i].dataset.validate;
    let validateFn = window[validate];
    if (validateFn) {
      let error = validateFn(inputs[i]);
      if (error) {
        return alert(error);
      }
    }
  }
}

function checkUsername(input) {}
function checkEmail(input) {
  let val = input.value;
  if (!val || val.indexOf('@') == -1) {
    return '邮箱格式不正确';
  }
}
