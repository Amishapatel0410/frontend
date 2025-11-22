const form = document.getElementById("regForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Stop form from submitting

        let isValid = true;

        // Get values
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        // Error elements
        const nameErr = document.getElementById("nameError");
        const emailErr = document.getElementById("emailError");
        const passErr = document.getElementById("passError");

        // Clear previous errors
        nameErr.textContent = "";
        emailErr.textContent = "";
        passErr.textContent = "";

        // Name validation
        if (name.value.trim() === "") {
            nameErr.textContent = "Name is required";
            name.classList.add("invalid");
            isValid = false;
        } else {
            name.classList.remove("invalid");
            name.classList.add("valid");
        }

        // Email validation
        if (email.value.trim() === "") {
            emailErr.textContent = "Email is required";
            email.classList.add("invalid");
            isValid = false;
        } else if (!email.value.includes("@")) {
            emailErr.textContent = "Invalid email (must contain @)";
            email.classList.add("invalid");
            isValid = false;
        } else {
            email.classList.remove("invalid");
            email.classList.add("valid");
        }

        // Password validation
        if (password.value.trim() === "") {
            passErr.textContent = "Password is required";
            password.classList.add("invalid");
            isValid = false;
        } else if (password.value.length < 8) {
            passErr.textContent = "Password must be at least 8 characters";
            password.classList.add("invalid");
            isValid = false;
        } else {
            password.classList.remove("invalid");
            password.classList.add("valid");
        }

        // If form valid
        if (isValid) {
            alert("Form submitted successfully!");  // You can remove if not needed
        }
    });