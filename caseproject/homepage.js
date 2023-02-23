function CalculatePrice(num){
    return num * 100
}

//OnChange Event Listener
document.getElementById("Hours").onchange = function(){
    let hours = document.getElementById("Hours").value;
    let price = document.getElementById("Price").value;
    if (hours < 0) {
        document.getElementById("Hours").value = 0;
    }
    if (price < 0){
        document.getElementById("Price").value = 0;
    }
    document.getElementById("Price").value = CalculatePrice(hours)
}

//Submit Form Stuff
document.getElementById("submit").addEventListener("click", verifyForm);
function verifyForm(){
    let name = document.getElementById("Name").value;
    let address = document.getElementById("Address").value;
    let phone = document.getElementById("PhoneNum").value;
    let hours = document.getElementById("Hours").value;
    let price = document.getElementById("Price").value;

    if (name && address && phone && hours && price) {
    window.alert("Thank you! We'll get back to you as soon as possible!");
    } else {
    window.alert("Please fill in all fields");
    }
}




var today = new Date();
var hour = today.getHours();
  
if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good morning!";
  } else if (hour < 18) {
    document.getElementById("greeting").innerHTML = "Good afternoon!";
  } else {
    document.getElementById("greeting").innerHTML = "Good evening!";
  }

