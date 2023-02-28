//Add the javascript for the greeting in the top left
var today = new Date();
var hour = today.getHours();
  
if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good morning!";
  } else if (hour < 18) {
    document.getElementById("greeting").innerHTML = "Good afternoon!";
  } else {
    document.getElementById("greeting").innerHTML = "Good evening!";
  }