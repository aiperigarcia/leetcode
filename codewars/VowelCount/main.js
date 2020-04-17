/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  var vowelsCount = 0;
  let splitter = str.split('', str.length)
  let counter = 0
  for (i=0;i<splitter.length; i++){
    if(splitter[i] === 'a' || splitter[i] === 'e' || splitter[i] === 'i' || splitter[i] === 'o' || splitter[i] === 'u'){
    counter++
    }
    else{counter+=0}
  }
  return counter
}
