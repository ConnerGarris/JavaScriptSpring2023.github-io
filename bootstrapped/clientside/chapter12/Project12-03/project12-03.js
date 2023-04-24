"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: 
      Date:   

      Filename: project12-03.js
*/


$('article > h2').click(function() {
      const heading = $(this);
      const list = heading.next();
      const headingImage = heading.children('img');
    
      list.slideToggle(500);
    
      const srcValue = headingImage.attr('src');
      if (srcValue === 'plus.png') {
        headingImage.attr('src', 'minus.png');
      } else {
        headingImage.attr('src', 'plus.png');
      }
});
    