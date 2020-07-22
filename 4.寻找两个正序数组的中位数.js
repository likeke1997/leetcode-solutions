/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 * 1.既然要求时间复杂度为O(log(m+n))，那么应该想到二分法。
 *   思路比较巧妙，三言两语讲不清楚，建议直接看官方题解。
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 把短的数组放前面，便于后面比较
  const len1 = nums1.length,
    len2 = nums2.length;
  if (len1 > len2) return findMedianSortedArrays(nums2, nums1);
  // 如果总长度为奇数，则第k个数为中位数
  // 如果总长度为偶数，则第k和第k+1个数为中位数
  const K = ((len1 + len2) / 2) >> 1;
  let k = K,
    i = (k >> 1) - 1,
    j = (k >> 1) - 1,
    num1,
    num2;
  while (i + j + 1 < K) {
    i = Math.min(len1 - 1, i);
    j = Math.min(len2 - 1, j);
    num1 = nums1[i];
    num2 = nums2[j];
    k = K - i - j;
    if (num1 >= num2) j += k >> 2;
    else i += k >> 2;
  }
  console.log(K, k, i, j);
  return 0;
};
// @lc code=end
