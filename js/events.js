/**
 * Adding dark theme css on window load based on darkMode slider input
 */
window.addEventListener("load", function() {
    // Removing bg color transition so that it doesn't happens on every page load
    removeTransition();
    if (window.localStorage.getItem("darkMode") == "true") {
        document.getElementById("dark-mode").checked = true;
        addDarkTheme();
    } else {
        document.getElementById("dark-mode").checked = false;
        removeDarkTheme();
    }
})
