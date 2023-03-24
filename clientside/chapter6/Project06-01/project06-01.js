"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Conner Garris
      Date: 3/24/2023

      Filename: project06-01.js
*/

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
  console.log("Success");

  const pwd = document.getElementById("pwd");
  const pwd2 = document.getElementById("pwd2");

  // Check password validity
  if (!pwd.checkValidity()) {
    //Check if the field is filled in
    if (pwd.validity.valueMissing) {
      alert("Please fill in the password field.");
      //Check for if the password field matches the pattern given in the html
    } else if (pwd.validity.patternMismatch) {
      alert("Your password must be at least 8 characters with at least one letter and one number.");
    }
  } else {
    // Check for password match
    if (pwd.value === pwd2.value) {
      console.log("Password matches");
      // Set validation message to empty string when I figure out what the validation message is
    } else {
      alert("Your passwords must match.");
    }
  }
});