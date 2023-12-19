function toggleSignIn() {
    
    let isSignedIn = false;

    
    if (!isSignedIn) {
        
        const username = prompt("Enter your username:");

        if (username) {
            
            isSignedIn = true;
            updateSignInButton();
            alert(`Welcome, ${username}!`);
            
    } else {
        
        const confirmSignOut = confirm("Are you sure you want to sign out?");
        
        if (confirmSignOut) {
            
            isSignedIn = false;
            updateSignInButton();
            alert("You have been signed out.");
        }
    }
}

function updateSignInButton() {
    
    const signInButton = document.getElementById("sign-in-out-button");
    const signInText = document.getElementById("sign-in-text");

    
    if (signInButton && signInText) {
        signInText.innerText = isSignedIn ? "Sign Out" : "Sign In";
    }
}
}

document.addEventListener("DOMContentLoaded", function () {
    const imageLinks = document.querySelectorAll("#picture-container a");

    imageLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // The link will open in the same tab by default
        });
    });
});

