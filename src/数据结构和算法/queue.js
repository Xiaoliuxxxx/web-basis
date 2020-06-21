// First In First Out
function Queue() {
  //存储数据
  var items = []

  // 方法
  // enqueue从队尾添加一个元素：入队
  this.enqueue = function (item) {
    items.push(item)
  }

  //dequeue从队列头部删除一个元素：出队
  this.dequeue = function () {
    return items.shift()
  }

  //head返回头部元素
  this.head = function () {
    return items[0]
  }

  //size返回队列大小
  this.size = function () {
    return items.length
  }

  //clear清空队列
  this.clear = function () {
    items = []
  }

  // isEmpty判断队列是否为空
  this.isEmpty = function () {
    return items.length === 0
  }

  // tail返回队列尾节点
  this.tail = function () {
    return items[items.length - 1]
  }
}

// 1.0-99共计100个数字，每三个数字删除一个，然后组成新的数组再进行操作，直到最后剩下一个，求随后删除的数字
function del_ring(arr_list) {
  var queue = new Queue()
  for (let i = 0; i < arr_list.length; i++) {
    queue.enqueue(arr_list[i])
  }

  var index = 0
  while (queue.size() !== 1) {
    var item = queue.dequeue
    index += 1
    console.log(index, 'index')
    if (index % 3 != 0) {
      queue.enqueue(item)
    }
  }
  return queue.head()
}

var arr = []
for (var index = 0; index < 100; index++) {
  arr.push(index)
}
console.log(del_ring(arr))

// @todo 两个队列实现栈
