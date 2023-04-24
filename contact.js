const emailInput = document.getElementById('email-input');
const nameInput = document.getElementById('name-input');
const interestsInputs = document.getElementsByName('interests');
console.log("java loaded")
function validateForm(_event) {
    
    let isValid = true;

    // Check if email address is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }

    // Check if name field is filled
    if (nameInput.value.trim() === '') { // Use trim() to remove whitespace
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    // Check if at least one checkbox is selected
    let isChecked = false;
    for (let i = 0; i < interestsInputs.length; i++) {
        if (interestsInputs[i].checked) {
        isChecked = true;
        break;
        }
    }
    if (!isChecked) {
        document.querySelector('#interests-label').classList.add('error');
        document.querySelector('#interests-label').setCustomValidity("Please Select One Of The Interest Choices");

        
        isValid = false;
    } else {
        document.querySelector('#interests-label').classList.remove('error');
    }

    // Return false if any validation failed
    if (!isValid) {
        return false;
    }

    return true;
    }
  