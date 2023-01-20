// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function. 
// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array,
// but [100, 300] is not.

// Sample Input:
// maxSubarraySum([100,200,300,400], 2)   //700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)   //39
// maxSubarraySum([-3,4,0,-2,6,-1], 2)   //5
// maxSubarraySum([2,3], 3)   //null

const maxSubarraySum = (array, number) => {
    let tempNumber = 0;
    let maxNumber = 0
    if (array.length < number) return null;
    for (let i = 0; i < number; i++) maxNumber += array[i]
    // console.log(maxNumber);
    tempNumber = maxNumber
    for (let i = number; i < array.length; i++) {
        console.log(i);
        tempNumber = tempNumber - array[i - number] + array[i];
        maxNumber = Math.max(tempNumber, maxNumber)
    }
    return maxNumber
}


console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));