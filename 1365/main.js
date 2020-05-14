/*
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.



Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]

*/


/*
p array of numbers
r array of numbers
e
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
p
1. create function smallerNumbersThanCurrent(nums)
2. create empty array
3. create variable countNumbers
4. iterate through nums
5. for each number in array we will count smaller numbers than each element
6. add count to new array
7. return new array

*/

var smallerNumbersThanCurrent = function(nums) {
    let smallerNumbers = []
    for ( var i = 0; i < nums.length; i++){
     let count = 0;
        for (var j = 0; j < nums.length; j++){
            if(nums[j] < nums[i]){
                count++
            }
        }
      smallerNumbers.push(count)
    }
    return smallerNumbers
};
