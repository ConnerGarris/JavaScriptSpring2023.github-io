"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Conner Garris
      Date: 4/10/2023

      Filename: project09-03.js
*/

/* Page Objects */

let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

if (localStorage.sbloggerVisit) {
      const storedLastDate = localStorage.sbloggerVisit;
      const lastVisitDate = document.getElementById('lastVisitDate');
      lastVisitDate.textContent = storedLastDate;
    
      const lastDate = new Date(storedLastDate);
    
      for (const dateItem of articleDates) {
        const articleDate = new Date(dateItem.textContent);
        if (articleDate > lastDate) {
          dateItem.innerHTML += '<strong>new</strong>';
        }
      }
    } else {
      const lastVisitDate = document.getElementById('lastVisitDate');
      lastVisitDate.textContent = 'Welcome to SBlogger!';
    
      for (const dateItem of articleDates) {
        dateItem.innerHTML += '<strong>new</strong>';
      }
    }
    
    const currentDate = new Date('9/12/2024');
    const sbloggerVisit = currentDate.toLocaleDateString();
    localStorage.setItem('sbloggerVisit', sbloggerVisit);
    
