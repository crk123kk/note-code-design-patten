let h1 = <h1 className="title">hello</h1>;
let h1 = React.createElement('h1', { className: 'title' }, 'hello');
class VNode {
  constructor(tagName, attrs, children) {
    this.tagName = tagName;
    this.attrs = attrs;
    this.children = children;
  }
}

// 这也是一个简单工厂模式
function createElement(tagName, attrs, children) {
  return new VNode(tagName, attrs, children);
}
