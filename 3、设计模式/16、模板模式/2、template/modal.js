class Modal {
  constructor(options = {}) {
    this.title = options.title || '标题';
    this.content = options.content || '内容';
    this.onConfirm = options.onConfirm;
    this.onCancel = options.onCancel;
    this.init();
    this.eventListener();
  }

  //初始化的方法用于在页面中绘制一个对话框
  init() {
    this.panel = document.createElement('div');
    this.panel.className = 'modal';
    document.body.appendChild(this.panel);

    let titleP = (this.titleP = document.createElement('p'));
    titleP.innerHTML = this.title;
    this.panel.appendChild(titleP);

    let contentP = (this.contentP = document.createElement('p'));
    contentP.innerHTML = this.content;
    this.panel.appendChild(contentP);

    let confirmBtn = (this.confirmBtn = document.createElement('button'));
    confirmBtn.className = 'button confirm-button';
    confirmBtn.innerHTML = '确定';
    this.panel.appendChild(confirmBtn);

    let cancelBtn = (this.cancelBtn = document.createElement('button'));
    cancelBtn.className = 'button cancel-button';
    cancelBtn.innerHTML = '取消';
    this.panel.appendChild(cancelBtn);
  }

  eventListener() {
    this.confirmBtn.addEventListener('click', () => {
      this.onConfirm();
      this.hide();
    });
    this.cancelBtn.addEventListener('click', () => {
      this.onCancel();
      this.hide();
    });
  }
  hide() {
    this.panel.style.display = 'none';
  }
  show() {
    this.panel.style.display = 'block';
  }
}

class ContentOnlyModal extends Modal {
  init() {
    super.init();
    this.titleP.parentNode.removeChild(this.titleP);
  }
}

class XModal extends Modal {
  init() {
    super.init();
    let x = (this.x = document.createElement('span'));
    x.innerHTML = 'X';
    x.className = 'close-me';
    this.panel.appendChild(x);
  }
  eventListener() {
    super.eventListener();
    this.x.addEventListener('click', () => {
      this.hide();
    });
  }
}
