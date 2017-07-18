/**
* Some people are standing in a row in a park.
* There are trees between them which cannot be moved.
* Your task is to rearrange the people by their heights in a non-descending order
* without moving the trees.
*
* Example:
*
* For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
* sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(arr) {
  var sorted = arr.filter(x => x !== -1).sort((a,b) => a>b)
  return arr.map(x => {
    if (x === -1) {
      return -1
    } else {
      return sorted.shift()
    }
  })
}
