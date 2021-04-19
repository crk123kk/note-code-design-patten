/**
 * 简单工厂模式封装了代码实现，降低了代码耦合
 *
 * // 普通方式
 * let a = new VNode(); // 这是使用者直接调用了
 * // 简单工厂模式
 * let a = createElement(); // 虽然在createElement中也只是return一个VNode
 * 但是他封装了这个方法的实现，并且不管内部VNode中如何变化，设置VNode编程了VVNode这样，也不会影响
 * createElement的调用，但是普通方式的调用就会受到影响（耦合太大）
 */
