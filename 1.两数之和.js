/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
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
  const numsHash = {};
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i],
      num2 = target - num1,
      j = numsHash[num2];
    if (j !== undefined) return [i, j];
    numsHash[num1] = i;
  }
  return [-1, -1];
};
// @lc code=end
