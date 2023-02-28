var today = new Date();
var hour = today.getHours();
  
if (hour < 12) {
    document.getElementById("greeting").innerHTML = "Good morning!";
  } else if (hour < 18) {
    document.getElementById("greeting").innerHTML = "Good afternoon!";
  } else {
    document.getElementById("greeting").innerHTML = "Good evening!";
  }

//Submit Form Stuff
document.getElementById("submit").addEventListener("click", verifyForm);


function verifyForm(){
  thankyoutext.innerHTML = "";
  let creditcardnumber = document.getElementById("creditcardnum").value;
  console.log(validateCardNumber(creditcardnumber))
  try {
    if (validateCardNumber(creditcardnumber)) {
      window.alert("Valid card number")
      thankyoutext.innerHTML = "Thank you for your purchase we'll be with you soon!"
    }
    else{
      thankyoutext.innerHTML="Not Valid Information! Please Try Again!"
    }
  }
  catch (error){
    window.alert(error)
  }
}


//Credit Card Validator
const validateCardNumber = number => {
  //Check if the number contains only numeric value  
  //and is of between 13 to 19 digits
  const regex = new RegExp("^[0-9]{13,19}$");
  if (!regex.test(number)){
      return false;
  }

  return luhnCheck(number);
}

const luhnCheck = val => {
  let checksum = 0; // running checksum total
  let j = 1; // takes value of 1 or 2

  // Process each digit one by one starting from the last
  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    // Extract the next digit and multiply by 1 or 2 on alternative digits.
    calc = Number(val.charAt(i)) * j;

    // If the result is in two digits add 1 to the checksum total
    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    // Add the units element to the checksum total
    checksum = checksum + calc;

    // Switch the value of j
    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  //Check if it is divisible by 10 or not.
  return (checksum % 10) == 0;
}