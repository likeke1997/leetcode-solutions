/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 1.遇到左括号时，该括号入栈
 * 2.遇到右括号时，如该括号与栈顶括号对应，则出栈，否则返回false
 * 3.最后判断栈长度是否为0，如果不为0，返回true
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [],
    lefts = ["(", "{", "["],
    rights = [")", "}", "]"];
  for (let char of s) {
    const [i, j] = [lefts.indexOf(char), rights.indexOf(char)];
    if (i !== -1) stack.push(i);
    else if (j !== stack.pop()) return false;
  }
  return stack.length === 0;
};
// @lc code=end
