// js/formValidation.js

// Wait until the whole page is loaded before running

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Listen for the form submit event

    form.addEventListener("submit", function (event) {

        // Prevent the form from actually submitting yet

        event.preventDefault();


        // Run all checks; if they all pass, show success

        if (validateForm()) {

            showSuccess();

        }

    });


});

function validateForm() {

    let isValid = true; // assume everything is fine to start


    // --- Full Name ---

    const nameVal = document.getElementById("fullName").value.trim();

    if (nameVal === "") {

        showError("fullNameError", "Please enter your full name.");

        isValid = false;

        } else {

            clearError("fullNameError");

    }


    // --- Email ---

    const emailVal = document.getElementById("email").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailVal === "") {

        showError("emailError", "Please enter your email address.");

        isValid = false;

    } else if (!emailRegex.test(emailVal)) {

        showError("emailError", "Please enter a valid email (e.g.you@example.com).");

        isValid = false;

    } else {

        clearError("emailError");

    }


    // --- Reason for Contact ---

    const reasonVal = document.getElementById("reason").value;

    if (reasonVal === "") {

        showError("reasonError", "Please select a reason for contacting us.");

        isValid = false;

        } else {

            clearError("reasonError");

    }


    // --- Contact Method (radio buttons) ---

    const methodSelected =

    document.querySelector('input[name="contactMethod"]:checked');

    if (!methodSelected) {

        showError("contactMethodError", "Please choose a preferred contactmethod.");

        isValid = false;

    } else {

        clearError("contactMethodError");

    }


    // --- Message ---

    const msgVal = document.getElementById("message").value.trim();

    if (msgVal === "") {

        showError("messageError", "Please enter a message.");

        isValid = false;

    } else if (msgVal.length < 10) {

        showError("messageError", "Your message must be at least 10 characters.");

        isValid = false;

    } else {

        clearError("messageError");

    }


    return isValid;

}

// Show an error message in the named span
function showError (spanId, message){
    const span = document.getElementById(spanId);
    span.textContent = message;
    span.style.display = "block";
}

// Clear an error message
function clearError (spanId){
    const span = document.getElementById(spanId);
    span.textContent = "";
    span.style.display = "none";
}

// Show a success message and hide the form
function showSuccess(){
    form.innerHTML = '< div class = "success msg>' +
        '<h2> Thank You! </h2>' +
        '<p> Your message has been received Will be in touched within 24 hrs. </p>' +
        '</div>';
}