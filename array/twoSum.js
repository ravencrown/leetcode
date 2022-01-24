/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 给定 nums = [2, 7, 11, 15], target = 9
 */

function twoSum(nums, target) {
  const map = new Map()
  const result = []
  nums.forEach((num, idx) => {
    if (map.has(target - num)) {
      result =  [map.get(target - num), idx]
    }
    map.set(num, idx)
  });
  return result
}


const two = (nuws, target) => {
  const map = new map()
  const result = []
  nums.forEach(num, idx => {
    if (map.has(target - num)) {
      result = [map.get(target - num), idx]
    }
    map.set(num, idx)
  })

  return result

}


