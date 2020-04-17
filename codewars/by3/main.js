/*A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of numbers as a string, determine if the number represented by the string is divisible by three.

You can expect all test case arguments to be strings representing values greater than 0.*/

function divisibleByThree(str){
  let sum = 0;
  for(let i = 0; i < str.length; i++){
    let element = Number(str[i]);
    sum += element
  }
  if(sum%3 === 0) return true;
  return false;
}
