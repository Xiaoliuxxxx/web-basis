// 参考：红宝书~P138-P174
/********************************************
 *            认识Object.defineProperty()
 ********************************************
 */
/** 对象的属性类型：数据类型 访问器类型 */
/**数据类型（对数据负责）
 * 1. Configurable:表示能否通过delete删除属性从而重新定义属性  默认为true
 * 2. Enumerable:表示能否通过for in循环返回属性 默认为true
 * 3. Writable:表示能否修改属性的值 默认为true
 * 4. Value:包含属性的值，默认为undefined
 *
 * 例如 var person = {age:12}对象中创建了age属性，它的值为12，也就是Value特性为12，其他的特性均为true
 */
var person = { age: 12 }
Object.defineProperty(person, 'age', {
  writable: false,
  value: 99,
  configurable: false,
})
person.age = 18
console.log(person.age) //99 因为设置了person对象age属性的writeable特性为false，所以所有的修改age属性值的操作都会被忽略
delete person.age
console.log(person.age) //99 因为设置了person对象age属性的configurable特性为false,所以无法删除。一旦定义为不可配置，则不能更改回来。锁死。

/**访问器属性（对读取写入负责）
 * 1. Configurable:表示能否通过delete删除属性从而重新定义属性  默认为true
 * 2. Enumerable:表示能否通过for in循环返回属性 默认为true
 * 3. get: 读取属性的时候调用的函数，默认为undefined
 * 4. set: 写入属性的时候调用的函数，默认为undefined
 */

var person = { __yaer: 2004, edition: 1 }
Object.defineProperty(person, 'year', {
  configurable: true,
  enumerable: true,
  get: function () {
    return this.__yaer
  },
  set: function (value) {
    this.__yaer = value
    this.edition += value - 2004
  },
})
person.year = 2005
person.edition // 2

/**定义多个属性，Object.defineProperties,接收2个参数 */
var book = {}
Object.defineProperties(book, {
  __year: {
    configurable: true,
    value: 2004,
  },
  edition: {
    writable: true,
    value: 1,
  },
  year: {
    get: function () {
      return this.__yaer
    },
    set: function (value) {
      return 2004 - value
    },
  },
})

/** 读取属性的特性 */
var descriptor = Object.getOwnPropertyDescriptor(book, '__year')

/********************************************
 *            创建对象的几种方式
 ********************************************
 */

/** 1.工厂模式 */
function createPerson(name, age, job) {
  var obj = new Object()
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function () {
    console.log(this.name)
  }
  return obj
}
var person1 = createPerson('Nicholas', 22, 'Software Engineer')
var person2 = createPerson('Greg', 33, 'Doctor')

/**2.构造函数模式 */
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}
var person1 = new Person('Nicholas', 22, 'Software Engineer')
var person2 = new Person('Greg', 33, 'Doctor')
person1.sayName === person2.sayName // false

/**工厂模式与构造函数模式的对比
 *  1,构造函数没有显式的创建一个对象
 *  2,构造函数直接将属性赋值给this对象
 *  3,构造函数没有return语句
 */

/**构造函数必须使用new 操作符，实际上做了哪些操作
 * 1, 创建一个新的对象
 * 2, 将构造函数的作用域赋给这个新的对象，因此this就指向这个新的对象
 * 3, 执行构造函数的代码
 * 4, 返回新的对象
 */

/**3.原型模式 */
function Person() {}
Person.prototype.name = 'Greg'
Person.prototype.age = 12
Person.prototype.sayName = function () {
  console.log(this.name)
}
var person1 = new Person()
person1.sayName() // Greg

/*重要的结论：
无论什么时候，只要创建了函数，就会根据一组规则为函数创建一个prototype属性,这个属性指向函数的原型对象。
在默认情况下，所有的原型对象都会自动获得一个constructor属性，这个属性指向prototype属性锁在函数的指针。
也就是说Person.prototype.constructor === Person
*/

// 检查示例是不是函数的原型对象
Person.prototype.isPrototypeOf(person1) // true
// 获取示例的原型对象
Object.getPrototypeOf(person)
// 检测属性存在于原型中还是实例中
person1.hasOwnProperty('age') // false
// in操作符可以访问到原型对象中的属性
for (var k in person1) {
  console.log(k) // age name sayName
}
// Object.keys()只能访问到实例中的属性
var keys = Object.keys(person1)
console.log(keys) //[]

// 实例中的指针仅指向原型，而不是构造函数@inportant
// 原型模式的缺点：引用类型会造成全局的共享

/**4. 原型模式和构造函数模式的组合（解决引用原型的共享问题） */
function Person(name, age, friends) {
  // 私有属性（特有属性）放在构造函数中，确保每个人有自己的属性值，即使是引用类型
  this.name = name
  this.age = age
  this.friends = friends
}
Person.prototype.sayName = function () {
  //共有的属性放在原型中，确保大家一起共享
  console.log(this.name)
}
var person = new Person('Greg', 12, ['Bob', 'Alex'])

/**5.动态原型模式 @todo if的好处*/
function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
  // 相较于上一种方法，这个地方做了个判断，当不存在时添加
  if (typeof this.sayName != 'function') {
    Person.prototype.sayName = function () {
      console.log(this.name)
    }
  }
}

var person = new Person('Greg', 12, ['Bob', 'Alex'])

/**稳妥构造函数模式 */
// 稳妥构造模式不适用this和new只支持最简单的
function Person(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(name)
  }
  return o
}

var person1 = Person('Greg', 12, 'Software Engineer')

/********************************************
 *                  继承
 ********************************************
 */

/**1.原型链继承 */
function SuperType() {
  this.supername = 'super'
}
SuperType.prototype.getSuperValue = function () {
  return this.supername
}

function SubType() {
  this.name = 'sub'
}
//这一步是关键，将subType的原型对象执行SuperType的实例
SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function () {
  return this.name
}

var person = new SubType()
person.getSubValue() //sub
person.getSuperValue() //super

/**
 * 1.别忘了默认的原型对象Object.prototype
 * 2.利用instanceof确认原型和实例的关系
 * 3.谨慎的定义方法
 * 4.原型链的问题：引用类型还是会全局共享
 */

/**2.借用构造函数 */
function SuperType() {
  this.colors = ['red', 'black']
}
function SubType() {
  // 继承了SuperType
  SuperType.call(this)
}
var instance = new SubType()
instance.push('white')
console.log(instance) // ['red', 'black','white']
var instance2 = new SubType()
console.log(instance2) //['red', 'black']
//构造函数的问题是无法对共享函数进行复用

/**3.组合继承：借用原型链对方法继承，借用构造函数对属性继承 */
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'black']
}
SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name)
  this.age = age
}
// 继承方法
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  console.log(this.age)
}

var instance = new SubType('Bob', 11)
instance.colors.push('white')
instance.sayName() // Bob
instance.sayAge() //11

var instance2 = new SubType('Greg', 90)
instance2.sayName() // Greg
instance2.sayAge() // 90
