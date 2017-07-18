/**
* Given two strings, find the number of common characters between them.
*
* Example:
*
* For s1 = "aabcc" and s2 = "adcaa", the output should be
* commonCharacterCount(s1, s2) = 3.
*
* Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
  var sum= 0;
  for(var i = 0; i < s1.length; i++){
    var index = s2.indexOf(s1.charAt(i));
    if(index > -1){
      sum++;
      s2 = s2.substring(0, index) + s2.substring(index+1, s2.length);
    }
  }
return sum;
}
