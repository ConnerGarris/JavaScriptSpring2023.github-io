function CalculatePrice(num){
    return num * 100
}

//OnChange Event Listener
document.getElementById("Hours").onchange = function(){
    let hours = document.getElementById("Hours").value;
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
    window.alert("Thank you!");
    } else {
    window.alert("Please fill in all fields");
    }
}
