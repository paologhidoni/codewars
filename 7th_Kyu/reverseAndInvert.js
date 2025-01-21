/*

Reverse and invert all integer values in a given list.

[1,12,'a',3.4,87,99.9,-42,50,5.6] --> [-1,-21,-78,24,-5]
Remove all types other than integer.


*/

function reverseInvert(array) {
  let processedArray = array.filter(
    (el) => typeof el === "number" && !Number.isNaN(el) && Number.isInteger(el)
  );

  processedArray = processedArray.map((el) => {
    const isNegative = el < 0;

    const reversedNumber = Math.abs(el).toString().split("").reverse().join("");
    return isNegative ? Number(reversedNumber) : -Number(reversedNumber);
  });

  return processedArray;
}

console.log(reverseInvert([1, 12, "a", 3.4, 87, 99.9, -42, 50, 5.6])); // [-1,-21,-78,24,-5]
