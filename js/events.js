import { isAuthenticated } from "./module.mjs";

/**
 * Adding dark theme css on window load based on darkMode slider input
 */
window.addEventListener("load", function() {
    // Removing bg color transition so that it doesn't happens on every page load
    removeTransition();
    let darkModeSlider = document.getElementById("dark-mode");
    if (darkModeSlider) {
        if (window.localStorage.getItem("darkMode") == "true") {
            darkModeSlider.checked = true;
            addDarkTheme();
        } else {
            darkModeSlider.checked = false;
            removeDarkTheme();
        }
    }
});

navigation.addEventListener("navigate", () => {
    isAuthenticated();
});