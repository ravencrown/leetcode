/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(array) {
  if (Array.isArray(array) && array.length > 0) {
      let sum = array[0];
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
        if (sum < 0) {
          sum = array[i];
        } else {
          sum = sum + array[i];
        }
        if (sum > max) {
          max = sum;
        }
      }
      return max;
    }
    return 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let prev = 0, max = nums[0];
  for (let i = 0; i < nums.length; i++) {
      prev = Math.max(nums[i], prev + nums[i]);
      max = Math.max(max, prev);
  }
  return max;
};










