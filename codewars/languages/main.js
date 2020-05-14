/* You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/


function myLanguages(results) {
  let newArray = [];
  for (let i in results) {
    if (results[i] >= 60) {
      newArray.push(i)
    }
  }
  newArray.sort(function(a, b) {
    return results[b] - results[a]
  })
  return newArray
}
