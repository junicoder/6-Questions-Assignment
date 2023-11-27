"use strict";
//Exercise 3: Check if a given number is positive, negative, or zero.
function checkNumberSign(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
const numberSign = checkNumberSign(-7);
console.log("The number is:", numberSign);
