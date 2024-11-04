function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.innerHTML = ""; // Clear previous error messages

    if (name.trim() === "") {
        errorMsg.innerHTML = "Please enter your name.";
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMsg.innerHTML = "Please enter a valid email address.";
        return false;
    }

    if (age < 1 || age > 120) {
        errorMsg.innerHTML = "Please enter a valid age between 1 and 120.";
        return false;
    }

    // Display success message as an alert
    alert("Form submitted successfully!");

    return true;
}
