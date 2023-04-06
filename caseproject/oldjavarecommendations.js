const form = document.getElementById('recommendations-form');

form.addEventListener('submit', validateForm);


function validateForm(event) {

    //Prevent the devualt submitting of the form
    const form = event.target;
    event.preventDefault();
    
  

    //Get the variables for the form
    const name = form.elements.name;
    const email = form.elements.email;
    const phone = form.elements.phone;
    const recommendation = form.elements.recommendation;
    const contactMethod = form.elements['contact-method'];
    const newsletter = form.elements.newsletter;

    //Get variables for the checkboxes
    let feedbackboxes = document.querySelectorAll('input[name="Atmosphere"], input[name="Customer Service"], input[name="Coffee"], input[name="Tea"], input[name="Espresso"]');
    let feedbackvalues = [];
    //create a boolean value to track throughout the forum submission process
    let isFormValid = true;
  
    if (!name.value.trim()) {
      name.setCustomValidity('Please enter your name.');
      isFormValid = false;
    } else {
      name.setCustomValidity('');
    }
  
    if (!email.value.trim()) {
      email.setCustomValidity('Please enter your email address.');
      isFormValid = false;
    } else if (!isValidEmail(email.value)) {
      email.setCustomValidity('Please enter a valid email address.');
      isFormValid = false;
    } else {
      email.setCustomValidity('');
    }
  
    if (phone.value == "") {
        phone.setCustomValidity("Please enter your phone number.");
      } else if (!isValidPhoneNumber(phone.value)) {
        phone.setCustomValidity("Please enter a valid phone number.");
      } else {
        phone.setCustomValidity("");
      }
  
    if (!recommendation.value.trim()) {
      recommendation.setCustomValidity('Please enter a recommendation.');
      isFormValid = false;
    } else {
      recommendation.setCustomValidity('');
    }
  
    if (!contactMethod.value) {
      contactMethod.setCustomValidity('Please select a contact method.');
      isFormValid = false;
    } else {
      contactMethod.setCustomValidity('');
    }
  
    if (!isFormValid) {
      return;
    }

    //Read through the feedback checkboxes store value in an array then read it 
    feedbackvalues.forEach((checkbox) => {
      if (checkbox.checked) {
        // If the checkbox is checked, push its value to the array
        feedbackvalues.push(checkbox.value);
      }
    });
    console.log("The result of feedback values is" + feedbackvalues)

  
    // Form is valid
    window.alert("Thank you for submitting your recommendation!")
    console.log('Submitting form with data:');
    console.log({
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      recommendation: recommendation.value.trim(),
      contactMethod: contactMethod.value,
      newsletter: newsletter.checked,
    });
  
    form.submit();
  }


  function isValidEmail(email) {
    // Check if email format is valid using regular expression
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  
  function isValidPhoneNumber(phoneNumber) {
    // Check if phone number format is valid using regular expression
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  }