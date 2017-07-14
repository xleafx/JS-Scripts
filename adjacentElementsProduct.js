/**
* Given an array of integers, find the pair of adjacent elements that has the
* largest product and return that product.
*
* Example:
*
* For inputArray = [3, 6, -2, -5, 7, 3], the output should be
* adjacentElementsProduct(inputArray) = 21.
*
* 7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {

  if(2 <= inputArray.length <= 10){
    var largestProduct = inputArray[0] * inputArray[0 + 1];
    for(var i = 0; i < inputArray.length; i++){
      if((-1000) <= inputArray[i] <= 1000){
        if(inputArray[i] * inputArray[i + 1] > largestProduct)
          largestProduct = inputArray[i] * inputArray[i + 1];
        }
    }
    return largestProduct;
  }

}
