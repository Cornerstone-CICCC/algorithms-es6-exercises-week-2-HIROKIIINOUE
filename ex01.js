/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  let maximum = 0;
  let secondLargest = 0;
  let count = 0;
  let sum = 0;

  data.forEach((num) => {
    if (num > maximum) {
      maximum = num;
    }
  });

  // Judge if maximum is same as secondLargest
  data.forEach((num) => {
    if (maximum === num) {
      count++;
    }
  });

  if (count >= 2) {
    sum = maximum * 2;
  } else {
    data.forEach((num) => {
      if (maximum === num) {
        return;
      } else if (num > secondLargest) {
        secondLargest = num;
      }
    });
    sum = maximum + secondLargest;
  }

  return sum;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;
