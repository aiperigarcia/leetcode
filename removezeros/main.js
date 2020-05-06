/* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

*/

/**** PREP

parameters => nums: array of numbers
result => array of numbers
example =>
Input: [0,1,2]
Output:[1,2,0]

pseudo code =>

1.create function moveZeros with parameter nums
2.iterate through an array nums length
3.finding the zeros inside of array
4.remove found zero at the current position in array
5.adding them to the end of array
6.while keeping other numbers in same order.


****/

var moveZeroes = function (nums){
    for(var i = nums.length - 1; i >= 0; i--){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
        }
    }
     return nums
}
