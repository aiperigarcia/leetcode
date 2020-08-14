/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.



Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/


//One Way
var runningSum = function (nums) {
  var result = 0;
  return nums.map(x => result += x);
};


//2nd Way


let runningSum = function(nums) {
    //A version
    // let sum = 0;
    // for(let i = 0; i < nums.length; i++){
    //     sum = sum + nums[i];
    //     nums[i] = sum;
    // }
    // return nums;

    //B version
    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i-1];
    }
    return nums;
};
