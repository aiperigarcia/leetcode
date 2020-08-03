/*
Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Example 1:

Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.

Example 2:

Input: s = "aiohn", indices = [3,1,4,2,0]
Output: "nihao"
*/


var restoreString = function(s, indices) {
    let result = []
    for(let i = 0; i < s.length; i++){
        result[indices[i]] = s[i]
    }
    return result.join('')
};
