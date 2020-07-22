## 说明

这是我的 LeetCode 题解。

以`1.两数之和.js`为例，对文件格式进行说明：

```js
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * 【编号】【题目】
 * [1] 两数之和
 * 【解题思路】
 * 1.双层循环的时间复杂度为O(n^2)，效率很低。
 *   利用哈希表来存放整数及其下标，能使寻找整数下标的时间复杂度降为O(1)，
 *   即相当于减少了一层循环，整体的时间复杂度变为O(n)。
 * 2.如果没有符合要求的整数，可返回[-1,-1]。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 【代码】
};
// @lc code=end
```
