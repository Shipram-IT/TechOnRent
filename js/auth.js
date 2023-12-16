function login() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    let loggedInUser = users.find(user => (user.email == email && user.password == password));
    
    if (loggedInUser) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        window.location = "../index.html";
        alert(`Welcome, ${loggedInUser.firstName} ${loggedInUser.lastName}!`);
    } else {
        alert("Invalid email or password.");
    }
}

function logout() {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");

    window.location = './login.html';
}

function register() {
    window.location = './register.html';
}

navigation.removeEventListener("navigate", () => {
    isAuthenticated();
});
