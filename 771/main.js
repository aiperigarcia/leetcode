/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
*/


/*
P string of letters, Lowercase and Uppercase
R a number of stones
E

Input: J = "aA", S = "aAAb"
Output: 3

P
1.create a function numJewelsInStones(J,S)
2.create counting array
3.iterate through J parameter
4.iterate through S parameter
5. if S === J
6. update count
*/


var numJewelsInStones = function(J, S) {
    let count = 0
    for(var i = 0; i < J.length; i++){
        for(var j = 0; j < S.length; j++){
            if( J[i] === S[j]){
                count++
            }
        }
    }
    return count
};
