function togglePassword(inputId, eyeId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "Screenshot_2023-11-28_204830-removebg-preview.png";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "Screenshot_2023-11-28_204845-removebg-preview.png";
    }

    checkPasswordMatch(); // Call the function to check password match
}

function showEyeIcon(inputId, eyeId) {
    const eyeIcon = document.getElementById(eyeId);
    const passwordInput = document.getElementById(inputId);

    if (passwordInput.value.trim() === "") {
        eyeIcon.style.display = "none";
    } else {
        eyeIcon.style.display = "block";
    }

    checkPasswordMatch(); // Call the function to check password match
}

function checkPasswordMatch() {
    const password = document.getElementById("password").value;
    const retypePassword = document.getElementById("retype-password").value;
    const matchMessage = document.getElementById("password-match-message");

    if (password === retypePassword) {
        matchMessage.style.display = "none"; // Hide the message if passwords match
    } else {
        matchMessage.style.display = "block"; // Display the message if passwords don't match
    }
}

document.getElementById("password").addEventListener("input", function () {
    showEyeIcon("password", "eye-icon");
});

document.getElementById("retype-password").addEventListener("input", function () {
    showEyeIcon("retype-password", "retype-eye-icon");
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Add additional checks or form submission logic if needed

    checkPasswordMatch(); // Call the function to check password match before form submission
});

document.body.style.zoom = "100%";
