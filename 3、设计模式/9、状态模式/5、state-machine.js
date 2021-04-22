// let StateMachine = require('javascript-state-machine');

class StateMachine {
  constructor(options) {
    let { init = '', transitions = [], methods = [] } = options;
    this.state = init;
    transitions.forEach((transition) => {
      let { from, to, name } = transition;
      this[name] = function () {
        if (this.state == from) {
          this.state = to;
          let onMethod = 'on' + name.slice(0, 1).toUpperCase() + name.slice(1);
          methods[onMethod] && methods[onMethod]();
        }
      };
    });
  }
}

let fsm = new StateMachine({
  // 初始状态
  init: 'solid',
  transitions: [
    {
      // 初始状态
      from: 'solid',
      // 目标状态
      to: 'liquid',
      // 从初始状态到目标状态发生改变所触发的方法： 从固态到液态：融化
      name: 'melt',
    },
    {
      from: 'liquid',
      to: 'solid',
      name: 'freeze',
    },
    {
      from: 'liquid',
      to: 'gas',
      // 蒸发
      name: 'vaporize',
    },
    {
      from: 'gas',
      to: 'liquid',
      name: 'condense',
    },
  ],
  methods: {
    // 监听融化的动作，当融化的时候，会执行此函数：类似于生命周期钩子，
    // 在状态变化的过程中调用对应的钩子进行状态（流程）控制
    onMelt: function () {
      console.log('onMelt');
    },
    onFreeze: function () {
      console.log('onFreeze');
    },
    onVaporize: function () {
      console.log('onVaporize');
    },
    onCondense: function () {
      console.log('onCondense');
    },
  },
});

fsm.melt();
