/**Given the string, check if it is a palindrome.
*
* Example:
*
* For inputString = "aabaa", the output should be
* checkPalindrome(inputString) = true;
*
* For inputString = "abac", the output should be
* checkPalindrome(inputString) = false;
*/

function checkPalindrome(inputString) {
  return inputString == inputString.split('').reverse().join('');
}
