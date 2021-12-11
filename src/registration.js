function registerUser() {

    let formData = {
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "phone": ""
    }

    // 1.1 use document to get all of the text input elements
    let textElements = document.getElementsByClassName('field');

    // 1.1.2 create variables for each text field
    let firstNameField = textElements[0];
    let lastNameField = textElements[1];
    let emailField = textElements[2];
    let passwordField = textElements[3];
    let phoneField = textElements[4];

    // 1.2
    let checkBox = document.getElementsByClassName('checkbox')[0];

    // 3. validate the form data
    let errors = [];

    if(firstNameField.value === '') {
        errors.push('Please enter first name');
    }

    if(lastNameField.value === '') {
        errors.push('Please enter last name');
    }

    if(emailField.value === '') {
        errors.push('Please enter email');
    }

    if(passwordField.value === '') {
        errors.push('Please enter password');
    }
    
    if(checkBox.checked === false) {
        errors.push('Please accept the terms & conditions');
    }


    // Get the hidden div layers
    let errorBox = document.getElementsByClassName('user-errors')[0];
    let successBox = document.getElementsByClassName('user-success')[0];

    if(errors.length > 0) {

        // Hide the success box an because error has occured        
        successBox.style.display = "none";

        // Unhide by changing its CSS to 'display: block'
        errorBox.style.display = "block";

        // Put the errors as html in the 'user-errors' div
        errorBox.innerHTML = errors.join("<br/>");

    } else {

        // Hide the error box because no error has occured  
        errorBox.style.display = "none";

        // Unhide by changing its CSS to 'display: block'
        successBox.style.display = "block";
    }


    // 4. send formData to backend
    formData['firstName'] = firstNameField.value;
    formData['lastName'] = lastNameField.value;
    formData['email'] = emailField.value;
    formData['phone'] = phoneField.value;
    formData['password'] = passwordField.value;


    console.log( formData )


}