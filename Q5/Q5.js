"use strict";
//Exercise 5: Check if a person is eligible to vote based on their age.
function checkVotingEligibility(age) {
    return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}
const votingStatus = checkVotingEligibility(22);
console.log("Person is:", votingStatus);
