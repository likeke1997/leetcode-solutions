/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  /* 迭代 */
  const rets = [];

  /* 递归
  const rets = [];
  if (root !== null) traverse(root);
  function traverse(root) {
    const { val, left, right } = root;
    if (left !== null) traverse(left);
    rets.push(val);
    if (right !== null) traverse(right);
  }
  return rets;
  */
};
// @lc code=end
