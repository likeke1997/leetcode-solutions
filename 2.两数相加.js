/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 * 1.因为链表中的位数为逆序，所以应顺序相加链表。
 * 2.注意处理有进位的情况。
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const list = new ListNode(0);
  let head = list,
    carry = false;
  while (l1 !== null || l2 !== null || carry) {
    let sum = Number(carry);
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = sum >= 10;
    sum = carry ? sum - 10 : sum;
    head.next = new ListNode(sum);
    head = head.next;
  }
  return list.next;
};
// @lc code=end
