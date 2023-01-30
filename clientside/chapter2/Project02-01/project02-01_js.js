/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: 
      Date:   

      Filename: project02-01.js
 */


function FHtoCL(fh) {
      return (fh - 32) * (5/9)
}
      
function CLtoFH(cl) {
      return ((cl * (9/5)) + 32)
}

document.getElementById("cValue").onchange = function(){
      let cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CLtoFH(cDegree);
}
document.getElementById("fValue").onchange = function(){
      let fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FHtoCL(fDegree);
}
