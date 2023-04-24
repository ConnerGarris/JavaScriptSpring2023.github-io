//Allows you to submit multiple times by listening to click event instead of submit event
let submitbtn = document.getElementById('submitbtn');
submitbtn.addEventListener("click", validateForm);

//Get the form id and make it a global value allowing the validate form button to submit
let form = document.getElementById("newsletterform");

//Store A Boolean value to track if the form is valid outside function to obtain global scope
let FormValid = true;

function validateForm(event) {
    //Prevent the submission on the form until it's validates
    event.preventDefault();
    console.log("validateformran");

    //Get Variables for form to check
    let email = document.getElementById("email-input");
    let name = document.getElementById("name-input");
    let interests = document.querySelectorAll('input[name="interests"]');
    let advice = document.getElementById("recommendation")
    let newsletter = document.getElementById("newsletter");
    let feedbackboxes = document.querySelectorAll('input[name="feedback"]');
    let feedbackvalues = [];

    //diagnostic values
    console.log(email.value);

    console.log("Is Valid email is reporting " + isValidEmail(email.value));

    if (!email.validity.valid) {
        email.setCustomValidity("Please type in a valid email address");
        return
    } else {email.setCustomValidity("");}

    //Check for a blank name since this function overrides the required function
    if (name.value === '') {
      console.log("The Name String is Empty");
      name.setCustomValidity("Please fill in the name field!");
      FormValid = false;
      return;
    } else {FormValid = true;};
    //Check for a valid email
    if (!isValidEmail(email.value)) {
      FormValid = false;
      email.setCustomValidity("Please type in a valid email address in the format xxx@xxx.com")
      console.log("Email is wrong and form valid is stored as " + FormValid);
      return;
    } else {
      FormValid = true;
    }

    //For every feedback box that is check add it to the feedback values array
    feedbackboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        feedbackvalues.push(checkbox.value);
      }
    });

    //Convert to string because assignment requires it
    feedbackvalues = ArraryToString(feedbackvalues)

    console.log("Further down the chain form valid is stored as " + FormValid);
    if (FormValid) {
      console.log("Form submitted" + FormValid);
      console.log("Final Form Info");
      console.log("Name: " + name.value);
      console.log("Email: " + email.value);
      console.log("Interests: " + getInterests(interests));
      window.alert("I will get in contact with you soon!");
      form.submit();
    }
    else {
      console.log("form was not valid" + FormValid);
      return;
    };
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getInterests(interests) {
    let selectedInterests = [];
    interests.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedInterests.push(checkbox.value);
        }
    });
    return selectedInterests;
}

function ArraryToString(text) {
    return text.toString();
}
