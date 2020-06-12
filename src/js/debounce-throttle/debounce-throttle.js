/**
 * 函数的防抖和节流
 */

/**
 * 防抖：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行：
 * *例子*  当一段时间内来了很多人乘坐电梯的时候，并不会每个人进入电梯后都会执行‘关闭电梯-运行’的操作
 * 而是规定在某个时间内，这些人都进入电梯以后一次性进行操作
 * *原理*
 */
function debounce(fn, wait, immediate) {
  /*存储闭包变量timeout来记录定时器*/
  let timeout = null
  return function () {
    let _this = this
    let args = arguments
    /* 如果有定时器，则需要清除,需要注意的是clearTimeout并不等于timeout === null */
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      /* 立即执行表示是第一次，此时肯定没有设置过定时器timeout,此时timeout为初始值null */
      let callNow = !timeout
      timeout = setTimeout(() => {
        /* 如果执行到这个定时器 表示这段防抖完全执行完毕，需要为下一次的防抖做准备 */
        timeout = null
        /* 取决于你是否想在一段时间间隔之后 仍然执行 */
        fn.apply(_this, args)
      }, wait)
      if (callNow) fn.apply(_this, args)
    } else {
      timeout = setTimeout(() => {
        fn.apply(_this, args)
      }, wait)
    }
  }
}

/**
 * 节流：当持续触发事件时，保证隔间时间触发一次事件，节流会合并一定时间内的事件，并在该时间结束时真正去触发一次事件
 */

/** 时间戳版本 */
function throttle(fn, wait) {
  /* 闭包保存上一个时间戳 */
  let pre = 0
  return function () {
    let _this = this
    let args = arguments
    let now = Date.now()
    /* 当前时间戳与上一个时间戳的间隔大于等待时间的时候执行 */
    if (now - pre >= wait) {
      fn.apply(_this, args)
      pre = Date.now()
    }
  }
}

/** 定时器版本 */
function throttle(fn, wait) {
  let timeout = null
  return function () {
    let _this = this
    let args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(_this, args)
      }, wait)
    }
  }
}

/**结合版本 */
function throttle(fn, wait, type) {
  if (type === 1) {
    let pre = 0
  } else if (type === 2) {
    let timeout = null
  }
  return function () {
    let _this = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()
      if (now - pre >= wait) {
        fn.apply(_this, args)
        pre = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          fn.apply(_this, args)
          timeout = null
        }, wait)
      }
    }
  }
}
