#### 工厂模式

##### 简单工厂模式（最常用）

    将创建实例的过程封装成一个工厂类，通过调用工厂类的方法返回对应的实例

##### 工厂方法模式

    多个工厂类，要想获取对应的实例，需要先创建对应实例的工厂类，通过调用对应的工厂类来创建对应的实例

##### 抽象工厂模式

    一个工厂可以创建多个产品：不同的工厂类可以创建不同的工厂类对应的实例，再比如：同样是增删改查，但是不同的数据库mysql和oracle也可以封装床两个工厂类，然后通过调用这两个工厂类来进行增删改查
