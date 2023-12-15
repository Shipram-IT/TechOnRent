window.addEventListener("load", function() {
    if (window.localStorage.getItem("darkMode") == "true") {
        document.getElementById("dark-mode").checked = true;
        document.styleSheets.item(1).disabled = false;
    } else {
        document.getElementById("dark-mode").checked = false;
        document.styleSheets.item(1).disabled = true;
    }
})
