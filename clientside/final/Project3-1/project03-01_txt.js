/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Conner Garris
      Date: 4/25/2023 

      Filename: project03-01.js
*/





const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');

const subtotal = document.getElementById('subtotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');
const orderDetails = document.getElementById('orderDetails');

const menuPrices = {
  item1: 11.95,
  item2: 13.95,
  item3: 10.95,
  item4: 17.95,
  item5: 8.95
};

function calculateBillTotal() {
  const item1Cost = item1.value * menuPrices.item1;
  const item2Cost = item2.value * menuPrices.item2;
  const item3Cost = item3.value * menuPrices.item3;
  const item4Cost = item4.value * menuPrices.item4;
  const item5Cost = item5.value * menuPrices.item5;

  const subtotalValue = item1Cost + item2Cost + item3Cost + item4Cost + item5Cost;
  subtotal.textContent = subtotalValue.toFixed(2);

  const taxValue = subtotalValue * 0.07;
  tax.textContent = taxValue.toFixed(2);

  const totalValue = subtotalValue + taxValue;
  total.textContent = totalValue.toFixed(2);
}

item1.addEventListener('input', calculateBillTotal);
item2.addEventListener('input', calculateBillTotal);
item3.addEventListener('input', calculateBillTotal);
item4.addEventListener('input', calculateBillTotal);
item5.addEventListener('input', calculateBillTotal);

let count = 0;

function addItem() {
  count++;
  document.getElementById("item-count").innerHTML = count;
}
function addItem() {
  count++;
  document.getElementById("item-count").innerHTML = count;
}

item1.addEventListener('input', () => {
  calculateBillTotal();
  addItem();
});

item2.addEventListener('input', () => {
  calculateBillTotal();
  addItem();
});

item3.addEventListener('input', () => {
  calculateBillTotal();
  addItem();
});

item4.addEventListener('input', () => {
  calculateBillTotal();
  addItem();
});

item5.addEventListener('input', () => {
  calculateBillTotal();
  addItem();
});