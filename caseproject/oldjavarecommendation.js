const form = document.getElementById('recommendations-form');

form.addEventListener('submit', validateForm);


function validateForm() {
  var name = document.forms["recommendations-form"]["name"];
  var email = document.forms["recommendations-form"]["email"];
  var phone = document.forms["recommendations-form"]["phone"];
  var message = document.forms["recommendations-form"]["recommendation"];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');


  if (name.value == "") {
    name.setCustomValidity("Please enter your name.");
  } else {
    name.setCustomValidity("");
  }

  if (email.value == "") {
    email.setCustomValidity("Please enter your email address.");
  } else if (!isValidEmail(email.value)) {
    email.setCustomValidity("Please enter a valid email address.");
  } else {
    email.setCustomValidity("");
  }

  if (phone.value == "") {
    phone.setCustomValidity("Please enter your phone number.");
  } else if (!isValidPhoneNumber(phone.value)) {
    phone.setCustomValidity("Please enter a valid phone number.");
  } else {
    phone.setCustomValidity("");
  }

  if (message.value == "") {
    message.setCustomValidity("Please enter a message.");
  } else {
    message.setCustomValidity("");
  }

  if (checkboxes.length == 0) {
    var checkboxesGroup = document.getElementById("checkboxes-group");
    checkboxesGroup.setCustomValidity("Please select at least one checkbox.");
  } else {
    checkboxesGroup.setCustomValidity("");
  }
}



function isValidPhoneNumber(phoneNumber) {
  var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phoneNumber);
}