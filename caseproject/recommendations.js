const form = document.getElementById('recommendations-form');

form.addEventListener('submit', validateForm);


function validateForm(event) {
    event.preventDefault();
    const form = event.target;
  
    const name = form.elements.name;
    const email = form.elements.email;
    const phone = form.elements.phone;
    const recommendation = form.elements.recommendation;
    const contactMethod = form.elements['contact-method'];
    const newsletter = form.elements.newsletter;
  
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