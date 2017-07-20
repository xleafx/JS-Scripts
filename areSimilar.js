/**
* Two arrays are called similar if one can be obtained from another by swapping
* at most one pair of elements in one of the arrays.
*
* Given two arrays a and b, check whether they are similar.
*
* Example:
*
* For a = [1, 2, 3] and b = [1, 2, 3], the output should be
* areSimilar(a, b) = true.
*
* The arrays are equal, no need to swap any elements.
*
* For a = [1, 2, 3] and b = [2, 1, 3], the output should be
* areSimilar(a, b) = true.
*
* We can obtain b from a by swapping 2 and 1 in b.
*
* For a = [1, 2, 2] and b = [2, 1, 1], the output should be
* areSimilar(a, b) = false.
*
* Any swap of any two elements either in a or in b won't make a and b equal.
*/

function areSimilar(A, B) {

  if(A.length !== B.length){
    return false
  }
  var fA, fB
  for(var i = 0; i < A.length; i++){
    if(A[i] !== B[i]){
      var misMatch = i
      i = Infinity;
    }
  }
  for(var j = A.length -1; j >= 0; j--){
    if(A[j] !== B[j]){
      if(A[misMatch] === B[j] && B[misMatch] === A[j]){
        var temp = B[misMatch]
        B[misMatch] = B[j]
        B[j] = temp
      }else {
        return false
      }
    }
  }
  for(var x = 0; x < A.length; x++){
    if(A[x] !== B[x]){
      return false
    }
  }
  return true
}
