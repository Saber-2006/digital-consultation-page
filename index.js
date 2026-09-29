
var imags = document.querySelectorAll("img.w-25");
var mainImg = document.querySelector("img.w-100");

for (var i = 0; i < imags.length; i++) {

    imags[i].addEventListener("click", function (e) {

        var targetImgSrc = e.target.getAttribute("src");

        mainImg.setAttribute("src", targetImgSrc);

        for (var i = 0; i < imags.length; i++) {

            imags[i].classList.remove(
                "border",
                "border-3",
                "border-danger"
            );

        }

        e.target.classList.add(
            "border",
            "border-3",
            "border-danger"
        );

    });

}


const form = document.getElementById("consultationForm");

const firstName = document.getElementById("FristName");
const lastName = document.getElementById("LastName");
const email = document.getElementById("Email");
const interest = document.getElementById("Interest");
const timeline = document.getElementById("Timeline");
const project = document.getElementById("project");
const policy = document.getElementById("Policy");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;


    // Clear previous errors

    document.querySelectorAll(".error-message").forEach(function (error) {

        error.remove();

    });


    // First Name

    if (firstName.value.trim() === "") {

        showError(firstName, "First name is required.");

        isValid = false;

    } else if (firstName.value.trim().length < 2) {

        showError(
            firstName,
            "First name must be at least 2 characters."
        );

        isValid = false;

    }


    // Last Name

    if (lastName.value.trim() === "") {

        showError(lastName, "Last name is required.");

        isValid = false;

    } else if (lastName.value.trim().length < 2) {

        showError(
            lastName,
            "Last name must be at least 2 characters."
        );

        isValid = false;

    }


    // Email

    if (email.value.trim() === "") {

        showError(email, "Email is required.");

        isValid = false;

    } else if (!isValidEmail(email.value.trim())) {

        showError(
            email,
            "Please enter a valid email address."
        );

        isValid = false;

    }


    // Interest

    if (interest.value === "Choose") {

        showError(
            interest,
            "Please choose your primary interest."
        );

        isValid = false;

    }


    // Timeline

    if (timeline.value === "Choose") {

        showError(
            timeline,
            "Please choose a timeline."
        );

        isValid = false;

    }


    // Project description

    if (project.value.trim() === "") {

        showError(
            project,
            "Please tell us about your project."
        );

        isValid = false;

    } else if (project.value.trim().length < 20) {

        showError(
            project,
            "Please provide at least 20 characters."
        );

        isValid = false;

    }


    // Privacy Policy

    if (!policy.checked) {

        showError(
            policy,
            "You must accept the Privacy Policy."
        );

        isValid = false;

    }


    // Final result

    if (isValid) {

        alert("Form submitted successfully!");

        form.reset();

    }

});


function showError(input, message) {

    const error = document.createElement("small");

    error.classList.add(
        "error-message",
        "text-danger",
        "d-block",
        "mt-1"
    );

    error.textContent = message;

    input.parentElement.appendChild(error);

}


function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}

