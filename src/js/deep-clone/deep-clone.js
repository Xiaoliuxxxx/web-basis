/**
 * 深拷贝
 *
 * 深拷贝和浅拷贝的区别：
 * 先从JS的数据类型说起，JS的数据类型分为2种，一种是基本数据类型，包括boolean,string,number,undefined,null,(symbol)
 * 他们保存在栈内存中，另一种则是引用数据类型，他们保存在堆内存中。我们在赋值引用类型数据的时候实际上复制的是数据的引用地址（指针）,
 * 改变其中一个变量，另一个变量也会发生变化
 */

/**浅拷贝实现Array.concat() Array.slice() Array.from()  Object.assign() */
const arr = [1, 2, 3, 4, [5, 6]]
const copy = arr.concat()
copy[2] = 2
console.log(arr) // [1, 2, 3, 4,[5,6]]  *改变基本数据结构不会改变原数组*

copy[4][1] = 0
console.log(arr) // [1,2,3,4,[5,0]]  *改变数组中引用类型的时候会改变原数组*

const obj1 = { x: 1, y: 2, z: { a: 1 } }
const obj2 = Object.assign({}, obj1)
obj2.x = 2
console.log(obj1) // {x:1,y:2,z:{a:1}}  改变基本数据类型时不会改变原有对象

obj2.z.a = 0
console.log(obj1) // {x:1,y:2,z:{a:0}}  改变引用数据类型时会改变原有对象

/* ============================================================================
 *                                深拷贝实现方式
 * ============================================================================
 */
/**
 * JSON.parse(JSON.stringify())
 * 优点：简单方便，能解决日常问题
 * 缺点：
 *     1.对象中的函数 undefined 正则表达式以及symboy类型在序列化的时候会被忽略
 *     2.它会抛弃之前对象的constructor，那也就是说丢失了原型链
 *     3.对象存在循环引用无法解决
 */
const obj3 = { x: 1, y: 2, z: { a: 1 } }
const obj4 = JSON.parse(JSON.stringify(obj3))
obj4.z.a = 0
console.log(obj3) // {x:1,y:2,z:{a:1}} 不会改变原数组

/**
 * 递归实现
 */
function deepClone(target) {
  let newObj = typeof target !== 'object' ? [] : {}
  for (var key in target) {
    /* 如果属性的值也是一个引用类型，则进行递归操作 */
    if (target[key] && typeof target[key] === 'object') {
      newObj[key] = deepClone(target[key])
    } else {
      /* 否则直接赋值给新的对象 */
      newObj[key] = target[key]
    }
  }
  return newObj
}

const obj5 = {
  x: { a: 1 },
  y: undefined,
  z: function add() {
    return 1
  },
  a: Symbol('foo'),
}

const obj6 = deepClone(obj5) // {x: {a: 1},y: undefined,z: ƒ add(),a: Symbol(foo)}
obj6.x.a = 0
console.log(obj5) // {x: {a: 1},y: undefined,z: ƒ add(),a: Symbol(foo)}
console.log(obj6) // {x: {a: 0},y: undefined,z: ƒ add(),a: Symbol(foo)}

/**解决循环引用问题 */
/* 参考文档:https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1#heading-6*/
/* @todo 对可继续遍历和不可继续遍历类型的深入区分；for循环的性能优化 */

function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    // 防止循环引用
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)

    for (const key in target) {
      cloneTarget[key] = deepClone(target[key], map)
    }

    return cloneTarget
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child',
  },
  field4: [2, 4, 8],
}
target.target = target
var obj7 = deepClone(target)
console.log(obj7)
