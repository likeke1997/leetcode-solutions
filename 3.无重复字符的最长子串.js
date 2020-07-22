/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 * 1.用哈希表存放字符及其下标。遍历s时，可借此判断是否出现重复字符。
 *   当前字符下标i减去重复字符下标j，即是以当前字符为末端字符的无重复字符子串的长度len。
 * 2.因为j只能往右走，所以当新j大于旧j时，才更新j。j初始为-1。
 * 3.用max表示结果，max初始为0。如果len大于max，才更新max。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charHash = {};
  let left = -1,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i],
      j = charHash[char];
    if (j !== undefined && j > left) left = j;
    max = Math.max(max, i - left);
    charHash[char] = i;
  }
  return max;
};
// @lc code=end
