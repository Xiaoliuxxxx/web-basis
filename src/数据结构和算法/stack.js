// Last in First out
function Stack() {
  //存储数据
  var items = []

  // 方法

  // push方法：添加一个元素到栈顶
  this.push = function (item) {
    items.push(item)
  }

  // pop方法：弹出栈顶元素
  this.pop = function () {
    return items.pop()
  }

  // top方法：返回栈顶元素
  this.top = function () {
    return items[items.length - 1]
  }

  //isEmpty:判断栈是否为空
  this.isEmpty = function () {
    return items.length === 0
  }

  // size方法：返回栈的长度
  this.size = function () {
    return items.length
  }

  // clear：清空栈
  this.clear = function () {
    items = []
  }
}

// 1.合法括号问题(123)(13223(3))
/**
 * 思路：
 * 1.遇到左括号，将左括号压入栈中
 * 2.遇到右括号，判断栈是否为空，为空，说明缺少左括号
 * 3.结束之后检查栈是否为空，为空表示缺少右括号;为空则满足
 */
var is_leagl_brackets = function (str) {
  var stack = new Stack()
  for (let i = 0; i < str.length; i++) {
    let item = str[i]
    if (item === '(') {
      stack.push(item)
    } else if (item === ')') {
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.isEmpty()
}

console.log(is_leagl_brackets('(123)(13223(3))')) // true
console.log(is_leagl_brackets('(123)(13223(3)))')) // false

// 2.后缀表达式
// 4+(13/5) = 6 中缀表达式
// 4 13 5 + / 后缀表达式
/**思路
 * 1.如果不是+ - * /中的一个的话就压入栈中
 * 2.如果是 + - * / 中的一个的话连续弹出两个栈顶元素进行计算操作  并压入栈中
 * 3.返回栈顶元素
 */

function calculate(str) {
  var stack = new Stack()
  for (let i = 0; i < str.length; i++) {
    let item = str[i]
    if (['+', '-', '*', '/'].indexOf(item) >= 0) {
      var value1 = stack.pop()
      var value2 = stack.pop()
      var result = value2 + item + value1
      var res = parseInt(eval(result))
      stack.push(res.toString())
    } else {
      stack.push(item)
    }
  }
  return stack.top()
}

console.log(calculate(['4', '13', '5', '/', '+'])) // '6'
