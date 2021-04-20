class Factory {
  createButton() {}
  createIcon() {}
}

class Button {}
class AppleButton {
  render() {
    console.log('绘制苹果按钮');
  }
}
class WindowsButton {
  render() {
    console.log('绘制windows按钮');
  }
}

class Icon {}
class AppleIcon {
  render() {
    console.log('绘制苹果图标');
  }
}
class WindowsIcon {
  render() {
    console.log('绘制windows图标');
  }
}

class WindowsFactory extends Factory {
  createIcon() {
    return new WindowsIcon();
  }
  createButton() {
    return new WindowsButton();
  }
}
class AppleFactory extends Factory {
  createIcon() {
    return new AppleIcon();
  }
  createButton() {
    return new AppleButton();
  }
}

/**
 * java是跨平台的
 * 1、画一个图标
 * 2、画一个按钮
 */

let windowsFactory = new WindowsFactory();
windowsFactory.createIcon().render();
windowsFactory.createButton().render();
let appleFactory = new AppleFactory();
appleFactory.createIcon().render();
appleFactory.createButton().render();
