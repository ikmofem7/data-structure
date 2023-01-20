// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen  which accepts two parameters
//  - an array of positive integers and a positive integer.
// This function should return the minimal length of a  contiguous subarray of which the sum
// is greater than or equal to the integer passed to the function. If there isn't one,
// return 0 instead.

// Sample Input:
// minSubArrayLen([2,3,1,2,4,3], 7)   //2[4,3]
// minSubArrayLen([2,1,6,4,5,9], 9)   //2[4,5]
// minSubArrayLen([2,1,6,66,5], 9)   //1 [66]
// minSubArrayLen([-1,0,1,2,3,4], 9)   //3 [2,3,4]
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)   //0
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)   //5

const minSubArrayLen = (array, target) => {
  let minLength = array.length + 1;
  // let sortedArray = array.sort((b, a) => a - b);
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (element >= target) {
      return 1;
    }
    for (let j = index + 1; j < array.length; j++) {
      element += array[j];
      if (element >= target && j - index + 1 < minLength) {
        minLength = j - index + 1;
        break;
      }
    }
  }
  if (minLength == array.length + 1) return 0;
  return minLength;
};

function SubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      console.log(end, total);
      end++;
    } else if (total >= sum) {
      total -= nums[start];
      minLen = Math.min(minLen, end - start);
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
console.log(SubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
