/**
You have a string s that consists of English letters, punctuation marks,
whitespace characters, and brackets.
It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses,
starting from the innermost pair. The results string should not contain any parentheses.

Example:

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".
*/

function reverseParentheses(s) {
  if (s.includes('(')){
    return reverseParentheses(reverseOnce(s));
  } else {
    return s;
  }
}

function reverseOnce(s){
  var regexp = /\(([^()]*)\)/i;
  var subStr = regexp.exec(s)[1];
  subStr = subStr.split('').reverse().join('');
  return s.replace(regexp, subStr)
}
