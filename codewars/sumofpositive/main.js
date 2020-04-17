// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if(arr.length === 0){
   return 0
  }
   let filter = arr.filter(number => number > 0)
   if(filter.length === 0){
     return 0
   }
   return filter.reduce((a,b) => a+b)
}
