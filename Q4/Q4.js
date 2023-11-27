"use strict";
//Exercise 4: Check if a given number is even or odd.
function checkEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
const evenOrOdd = checkEvenOrOdd(9);
console.log("The number is:", evenOrOdd);
