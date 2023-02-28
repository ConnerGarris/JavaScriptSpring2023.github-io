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

function verifyForm() {
  try {
    // Get the form elements
    const name = document.getElementById("Name").value;
    const address = document.getElementById("Address").value;
    const phone = document.getElementById("PhoneNum").value;
    const hours = document.getElementById("Hours").value;
    const price = document.getElementById("Price").value;

    // Check if all fields are filled
    if (name && address && phone && hours && price == false) throw new Error("Please fill in all forms");
    if (phone.length != 10) throw new Error("Phone Number is not the correct length!");
  } catch (error) {
    // Handle the error by showing an error message to the user
    window.alert(error.message);
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

