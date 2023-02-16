/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  if (nums[0] > 0) return nums.length;
  let left = 0;
  let leftCount = 0;
  let right = nums.length - 1;
  let rightCount = 0;
  let isEnd = '';
  while (1) {
    if (nums[left] < 0) {
      left++;
      leftCount++;
    }
    if (nums[right] > 0) {
      right--;
      rightCount++;
    }

    if (nums[left] >= 0 || nums[right] <= 0) {
      if (nums[right] <= 0) {
        while (1) {
          if (nums[left] < 0) {
            left++;
            leftCount++;
          } else {
            break;
          }
        }
      } else {
        while (1) {
          if (nums[right] > 0) {
            right--;
            rightCount++;
          } else {
            break;
          }
        }
      }
      break;
    }
  }
    return Math.max(leftCount, rightCount)
};
