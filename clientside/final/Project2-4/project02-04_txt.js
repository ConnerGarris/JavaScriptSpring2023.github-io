/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Conner Garris
      Date: 4/25/2023

      Filename: project02-04.js
 */
 



function calculateTotal() {
   var chickenQty = parseInt(document.getElementById('chicken').value);
   var halibutQty = parseInt(document.getElementById('halibut').value);
   var burgerQty = parseInt(document.getElementById('burger').value);
   var salmonQty = parseInt(document.getElementById('salmon').value);
   var saladQty = parseInt(document.getElementById('salad').value);
   
   var foodTotal = chickenQty * 10.95 + halibutQty * 13.95 + burgerQty * 9.95 + salmonQty * 18.95 + saladQty * 7.95;
   var foodTax = foodTotal * 0.1;
   var totalBill = foodTotal + foodTax;
   
   document.getElementById('foodTotal').innerHTML = formatCurrency(foodTotal);
   document.getElementById('foodTax').innerHTML = formatCurrency(foodTax);
   document.getElementById('totalBill').innerHTML = formatCurrency(totalBill);
   }
   
// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
