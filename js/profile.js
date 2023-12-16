function populateUser() {
    let user = JSON.parse(localStorage.getItem("user"));

    document.getElementById("name-section").innerHTML = user.firstName + " " + user.lastName;
    document.getElementById("user-email").innerHTML = user.email;
    document.getElementById("profile-pic").innerHTML = user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase();
}

populateUser();