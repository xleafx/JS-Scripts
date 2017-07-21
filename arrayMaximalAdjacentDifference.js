/**
* Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
*
* Example
*
* For inputArray = [2, 4, 1, 0], the output should be
* arrayMaximalAdjacentDifference(inputArray) = 3.
*
*/

function arrayMaximalAdjacentDifference(inputArray) {
	var max = -1;
	for (var i = 0; i < inputArray.length - 1; i++) {
		var tmp = Math.abs(inputArray[i] - inputArray[i + 1]);
		max = Math.max(max, tmp);
	}
	return max;
}
