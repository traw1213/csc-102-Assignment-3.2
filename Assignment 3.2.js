function validateUser() {
    // Get the values from the inputs
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var zipCode = document.getElementById('zipCode').value.trim();
    var messageElement = document.getElementById('message');
    var warningImage = document.getElementById('warningImage');

    // Hide warning image initially
    warningImage.style.display = 'none';
    warningImage.src = '';

    // The relative path to the image file
    var relativeImagePath = 'funny meme.jpg'; // Update this if the image name or path changes

    // Check if either the first or last name is empty
    if (firstName === '' || lastName === '') {
        messageElement.innerText = 'Invalid - Name is required.';
        warningImage.src = relativeImagePath; 
        warningImage.style.display = 'block'; // Make the image visible
        return;
    }

    // Combine first name and last name
    var fullName = firstName + ' ' + lastName;

    // Check if the full name is more than 20 characters
    if (fullName.length > 20) {
        messageElement.innerText = 'Name should not exceed 20 characters.';
        warningImage.src = relativeImagePath;
        warningImage.style.display = 'block'; // Make the image visible
        return;
    }

    // Check if the zip code is exactly 5 digits
    if (!(/^\d{5}$/.test(zipCode))) {
        messageElement.innerText = 'Invalid ZIP Code. It must be 5 digits.';
        warningImage.src = relativeImagePath;
        warningImage.style.display = 'block'; // Make the image visible
        return;
    }

    // If inputs are valid, hide the image and show the secret message
    messageElement.innerText = 'Welcome! Your information is valid.';
    // Ensure any previously shown image is hidden
    warningImage.style.display = 'none'; 
}

