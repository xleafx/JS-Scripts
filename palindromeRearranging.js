/**
* Given a string, find out if its characters can be rearranged to form a palindrome.
*
* Example:
*
* For inputString = "aabb", the output should be
* palindromeRearranging(inputString) = true.
*
* We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(inputString) {
    var count = [];
    for (var i = 0; i < 26; i++) {
        count.push(0);
    }
    for (var i = 0; i < inputString.length; i++) {
        count[inputString.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    var odds = 0;
    for (var i = 0; i < 26; i++) {
        if (count[i] % 2 === 1) {
            odds++;
        }
    }
    return odds === inputString.length % 2;
  }
