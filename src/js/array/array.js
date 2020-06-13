/**
 * 数组方法总结
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
let arr16 = [1, 2, 3, 4, 5]
let result16 = arr16.flatMap((currentValue) => {
  return [currentValue, currentValue * 2]
})
console.log(result16) // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
console.log(arr16) // [1, 2, 3, 4, 5]
