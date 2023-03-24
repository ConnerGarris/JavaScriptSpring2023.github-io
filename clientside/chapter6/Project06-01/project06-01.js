"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Conner Garris
      Date: 3/24/2023

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");

let pwd = document.getElementById("pwd");

let pwd2 = document.getElementById("pwd2");

 

submitButton.addEventListener("click", function() {

 

  // Check password validity

if (pwd.validity.valueMissing) {

            pwd.setCustomValidity("Please fill in the password field.");

      //Check for if the password field matches the pattern given in the html

    } else if (pwd.validity.patternMismatch) {

      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");

    } else {

    // Check for password match

    if (pwd.value === pwd2.value) {

        //Set the validation message to an empty string whenever the password matches
      pwd.setCustomValidity("");

    } 
    else {
      pwd.setCustomValidity("Your passwords must match."); //need to fix this and put it in the if (pwd.value !== pwd2.value)
    }
  }
});