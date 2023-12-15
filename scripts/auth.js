let currentStep = 1;
updateProgressBar();
function nextStep(step) {
    document.querySelector(`[data-step="${currentStep}"]`).style.display = "none";
    currentStep = step;
    document.querySelector(`[data-step="${currentStep}"]`).style.display = "block";
    updateProgressBar();
}

function prevStep(step) {
    document.querySelector(`[data-step="${currentStep}"]`).style.display = "none";
    currentStep = step;
    document.querySelector(`[data-step="${currentStep}"]`).style.display = "block";
    updateProgressBar();
}

function updateProgressBar() {
    console.log("current step: ", currentStep);
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = `${(currentStep) * 33.33}%`;
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
    } else {
        storeUserData();
        alert("Registration successful! You Can Login!");
    }
}

function storeUserData() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value; // Include password

    const userData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));   
    window.location.href = "/html/login.html";
}


function login() {
    
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;
    if (
        storedUserData &&
        loginEmail === storedUserData.email &&
        loginPassword === storedUserData.password
    ) {
        alert(`Welcome, ${storedUserData.firstName} ${storedUserData.lastName}!`);
        window.location.href = "/html/profile.html"; //NOT WORKING
    } else {
        alert("Invalid email or password.");
    }
}
