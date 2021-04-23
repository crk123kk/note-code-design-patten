#### 原型模式

#### 应用场景

    JavaScript就是通过原型链的方式实现继承过程中方法和属性的共享从而避免浪费资源

    不管是方法还是对象最终指向的都是Object/Function

    函数的本质就是对象

    对象都是通过函数创建的

    console.log(Object instanceof Function);
    console.log(Function instanceof Object);
    console.log(Object instanceof Function);
