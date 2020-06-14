/**
 * 数组方法总结
 * 参考文档：https://juejin.im/post/5bb753bd6fb9a05d2272b673
 * 会改变原数组的方法：
 * push  pop  unshift shift reverse sort splice copyWith
 */

/**1. Array.push(value),将数据添加到数组的最后，返回改变后数组的长度*/
var arr1 = [1, 2, 3, 4, 5]
var result1 = arr1.push(6)
arr1.push(7, 8) //允许一次添加多个值
console.log(arr1) //[1,2,3,4,5,6]
console.log(result1) // 6

/**2. Array.unshift(value),将数据添加到数组的开头，返回改变后数组的长度 */
var arr2 = [1, 2, 3, 4, 5]
var result2 = arr2.unshift(0)
arr2.unshift(0, 0)
console.log(arr2) //[0, 0, 0, 1, 2, 3, 4, 5]
console.log(result2) //6

/**3. Array.pop(),删除数组中的最后一个元素，返回被删除元素 */
var arr3 = [1, 2, 3, 4, 5]
var result3 = arr3.pop()
console.log(arr3) //[1, 2, 3, 4]
console.log(result3) //5

/**4. Array.shift(),删除数组中的第一个元素，返回被删除元素 */
var arr4 = [1, 2, 3, 4, 5]
var result4 = arr4.shift()
console.log(arr4) //[2, 3, 4, 5]
console.log(result4) //1

/**5. Array.join(value),将数组用value连接为字符串 */
var arr5 = [1, 2, 3, 4, 5]
var result5 = arr5.join('-')
console.log(arr5) // [1,2,3,4,5]
console.log(result5) // 1-2-3-4-5

/**6. Array.reverse(),反转数组 */
var arr6 = [1, 2, 3, 4, 5]
var result6 = arr6.reverse()
console.log(arr6) // [5,4,3,2,1]
console.log(result6) // [5,4,3,2,1]

//@todo
/**7. Array.slice(start,end) 返回新数组，包含原数组索引start的值到索引end的值，不包含end的值*/
var arr7 = [1, 2, 3, 4, 5]
var result7 = arr6.slice()
console.log(arr6) // [5,4,3,2,1]
console.log(result6) // [5,4,3,2,1]

//@todo
/**8. Array.splice(index,count,value)  从索引index处删除count个元素，插入value*/
var arr8 = [1, 2, 3, 4, 5]
var result8 = arr8.splice(1, 2, 0, 0)
console.log(arr8) // [1, 0, 0, 4, 5]
console.log(result8) // [2, 3]

/**9. Array.sort()对数组元素进行排序,返回排序之后的数组 */
var arr9 = [1, 5, 3, 2, 4]
var result9 = arr9.sort()
console.log(arr9) // [1, 2, 3, 4, 5]
console.log(result9) // [1, 2, 3, 4, 5]
var result9_1 = arr9.sort((a, b) => a - b)
console.log(result9_1) //[1, 2, 3, 4, 5]
var result9_2 = arr9.sort((a, b) => b - a)
console.log(result9_2) //[5, 4, 3, 2, 1]

/**10. Array.toString(),将数组中的元素用逗号拼接成字符串 */
var arr10 = [1, 2, 3, 4, 5]
var result10 = arr10.toString()
console.log(arr10) // [1,2,3,4,5]
console.log(result10) //1,2,3,4,5 相当于arr10.join(',')

/**11. Array.indexOf(value) 从索引0开始查找value，返回匹配的第一个索引 */
var arr11 = [1, 2, 3, 3, 3]
var result11 = arr11.indexOf(3)
console.log(arr11) // [1,2,3,3,3]
console.log(result11) // 2

/**12. Array.lastIndexOf(value) 从最后的索引开始查找，返回匹配的第一个索引*/
var arr12 = [1, 2, 3, 3, 3]
var result12 = arr12.lastIndexOf(3)
console.log(arr12) // [1,2,3,3,3]
console.log(result12) // 4

/**13. Array.concat(value) 将数组和数组(值)连接成新的数组，不改变原有的数组*/
var arr13 = [1, 2, 3, 4, 5]
var result13 = arr13.concat(6, 7)
console.log(arr13) // [1, 2, 3, 4, 5]
console.log(result13) // [1, 2, 3, 4, 5, 6, 7]
var result13_1 = arr13.concat([6, 7])
console.log(arr13) // [1, 2, 3, 4, 5]
console.log(result13) // [1, 2, 3, 4, 5, 6, 7]

/**14. Array.fill(value,start,end) 给数组填充值*/
var arr14 = [1, 2, 3, 4, 5]
var result14 = arr14.fill(0, 2, 3)
console.log(arr14) // [1, 2, 0, 4, 5]
console.log(result14) // [1, 2, 0, 4, 5]

/**15. Array.flat()将二维数组变成一维数组 */
var arr15 = [1, 2, [3, 4], [5]]
var result15 = arr15.flat()
console.log(arr15) // [1,2,[3,4],[5]]
console.log(result15) // [1, 2, 3, 4, 5]

/**16. Array.flatMap()  相当于map和flat的结合 */
var arr16 = [1, 2, 3, 4, 5]
var result16 = arr16.flatMap((currentValue) => {
  return [currentValue, currentValue * 2]
})
console.log(result16) // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
console.log(arr16) // [1, 2, 3, 4, 5]

/**17. Array.copyWith(target,start,end) 将数组从start到end索引的元素(不包含end)复制到target开始的索引位置(改变原数组)*/
var arr17 = [1, 2, 3, 4, 5]
var result17 = arr17.copyWithin(0, 2, 4)
console.log(result17) // [3, 4, 3, 4, 5]
console.log(arr17) // [3, 4, 3, 4, 5]

/**18. Array.entries() 返回一个Array迭代器对象 */
var arr18 = [1, 2, 3, 4, 5]
var result18 = arr18.entries()
console.log(arr18) //[1, 2, 3, 4, 5]
console.log(result18.next()) //{value:[0,1],done:false}

/**19. Array.keys()返回一个新的Array迭代器对象 */
var arr19 = [1, 2, 3, 4, 5]
var result19 = arr19.keys()
console.log(arr19) //[1, 2, 3, 4, 5]
console.log(result19.next()) //{value:0,done:false}

/**20. Array.values()返回一个新的迭代器 */
var arr20 = [1, 2, 3, 4, 5]
var result20 = arr20.keys()
console.log(arr20) //[1, 2, 3, 4, 5]
console.log(result20.next()) //{value:1,done:false}

/**21. Array.forEach()遍历数组，不改变原数组 */
var arr21 = [1, 2, 3, 4, 5]
var result21 = arr21.forEach((value, index) => {
  console.log(value, index)
  // 1 0
  // 2 1
  // 3 2
  // 4 3
  // 5 4
})

var a = []
for (let i = 0; i < 10000000; i++) {
  a.push(i)
}
var dateStart = Date.now()
a.forEach((v) => {})
var dateEnd = Date.now()
console.log(dateEnd - dateStart) // 运行3次 115ms 117ms  112ms

/**22. Array.every()判断数组中是否所有元素都满足条件 */
var arr22 = [1, 2, 3, 4, 5]
var result22 = arr21.every((value) => {
  return value >= 0
})
console.log(arr22) //[1, 2, 3, 4, 5]
console.log(result22) //true

/**23.Array.filter()返回数组中满足函数条件的集合 */
var arr23 = [1, 2, 3, 4, 5]
var result23 = arr23.filter((value) => {
  return value >= 3
})
console.log(arr23) //[1, 2, 3, 4, 5]
console.log(result23) //[3, 4, 5]

/**24. Array.find()返回数组中满足条件的第一个的值 */
var arr24 = [1, 2, 3, 4, 5]
var result24 = arr24.find((value) => {
  return value >= 3
})
console.log(arr24) //[1, 2, 3, 4, 5]
console.log(result24) //3

/**25. Array.findIndex()返回数组中满足条件第一个值的索引 */
var arr25 = [1, 2, 3, 4, 5]
var result25 = arr25.find((value) => {
  return value >= 3
})
console.log(arr25) //[1, 2, 3, 4, 5]
console.log(result25) //2

/**26. Array.includes()返回一个布尔值，表示数组中是否包含给定值 */
var arr26 = [1, 2, 3, 4, 5]
var result26 = arr26.includes(6)
console.log(arr26) //[1, 2, 3, 4, 5]
console.log(result26) //false

/**27. Array.map()返回函数返回值组成的新数组 */
var arr27 = [1, 2, 3, 4, 5]
var result27 = arr27.map((value) => {
  return value * 2
})
console.log(arr27) //[1, 2, 3, 4, 5]
console.log(result27) //[2, 4, 6, 8, 10]

/**28.Array.reduce() Array.reduceRight()累技器 */
var arr28 = [1, 2, 3, 4, 5]
var result28 = arr28.reduce(
  //初始值（默认第一个）当前值    当前索引     原数组
  (accumulator, currentValue, currentIndex, array) => {
    console.log(accumulator, currentValue, currentIndex, array)
    return accumulator + currentValue
  }
)

/**29.Array.some()只要数组中有满足条件的就返回true */
var arr29 = [1, 2, 3, 4, 5]
var result29 = arr29.some((value) => {
  return value >= 3
})
console.log(arr29) //[1, 2, 3, 4, 5]
console.log(result29) //true

/**30 Array.toLocalString() 将数组中的每个元素使用各自的toLocaleString()转换后用,拼接*/
var arr30 = [1, undefined, null, new Date(), { m: 1 }]
var result30 = arr30.toLocaleString()
console.log(arr30) //[1, undefined, null, new Date(), { m: 1 }]
console.log(result30) //1,,,2020/6/14 下午10:39:11,[object Object]
