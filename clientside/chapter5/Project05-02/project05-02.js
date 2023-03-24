"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Conner Garris
      Date: 3/7/2023

      Filename: project05-02.js
*/

// declare variables
const images = document.getElementsByTagName("img");
const photoBucket = document.getElementById("photo_bucket");
const photoList = document.getElementById("photo_list");

// loop through images and add onclick event handler
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  img.onclick = function() {
    const parent = img.parentNode;
    if (parent.id === "photo_bucket") {
      const newItem = document.createElement("li");
      photoList.appendChild(newItem);
      newItem.appendChild(img);
    } else {
      const oldItem = parent;
      photoBucket.appendChild(img);
      oldItem.parentNode.removeChild(oldItem);
    }
  };
}
