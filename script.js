
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let isValid = true;

    if (name.length < 3) {
        document.getElementById("nameError").textContent =
            "Name must contain at least 3 characters.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        isValid = false;
    }

    if (confirmPassword !== password || confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Form submitted successfully!";
        form.reset();
    }
});