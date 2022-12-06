//b)write a function that takes a two digit number and determines if its the largest of two
// possibile digit swaps
//to illustrate:
//largestSwap(27)->false
//largestSwap(43)->true
function largestDigitSwap(num) {
    let numString = num.toString();
    let firstDigit = Number(numString[0]);
    let secondDigit = Number(numString[1]);
    
    let swappedNum = secondDigit + "" + firstDigit;
    let swappedNumInt = Number(swappedNum);
    
    return num > swappedNumInt ? true : false;
  }
  console.log(largestDigitSwap(27))
  console.log(largestDigitSwap(43))