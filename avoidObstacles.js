/**
* You are given an array of integers representing coordinates of obstacles situated on a straight line.
*
* Assume that you are jumping from the point with coordinate 0 to the right.
* You are allowed only to make jumps of the same length represented by some integer.
*
* Find the minimal length of the jump enough to avoid all the obstacles.
*
* Example
*
* For inputArray = [5, 3, 6, 7, 9], the output should be
* avoidObstacles(inputArray) = 4.
*/

function avoidObstacles(inputArray) {

  for (var i = 1;; i++) {
    var found = true;
    for (var k = 0; k < inputArray.length; k++) {
      if (inputArray[k] % i === 0) found = false;
    }

    if (found) return i;

  }
}
