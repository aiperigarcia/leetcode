//Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  x = x.toLowerCase()
  return x === x.split('').reverse().join('')
}
