"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Conner Garris
      Date: 4/10/2023

      Filename: project09-01b.js
*/

let query = location.search.slice(1);
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);
var cardFields = query.split("&");
for (let field of cardFields) {
    // Split each item at the '=' character
    let nameValue = field.split('=');
  
    // Store the first and second items in separate variables
    let name = nameValue[0];
    let value = nameValue[1];
  
    // Set the text content of the element with the ID equal to the name variable
    document.getElementById(name).textContent = value;
  }
