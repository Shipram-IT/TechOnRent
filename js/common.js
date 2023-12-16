/**
 * Adds dark theme
 */
function addDarkTheme() {
    var head = document.head;
    var link = document.createElement("link");
    var index = document.getElementById("index");
  
    link.rel = "stylesheet";
    link.href = (index ? "./" : "../") + "css/dark-mode.css";
    link.id = "dark-theme-css";
  
    head.appendChild(link);
}

/**
 * Removes dark theme
 */
function removeDarkTheme() {
    var head = document.head;
    var link = document.getElementById("dark-theme-css");
  
    if (link) head.removeChild(link);
}

/**
 * Adding transitioning on background colour
 */
function addTransition() {
    document.body.classList.add("bg-color-transition");
}

/**
 * Removing transitioning on background colour
 */
function removeTransition() {
    document.body.classList.remove("bg-color-transition");
}

/**
 * Changes the theme
 * @param {Event} e DOM Event 
 */
function changeMode(e) {
    // Adding bg color transitioning
    addTransition();
    // Add or remove dark theme based on darkMode slider
    if (e.checked == true) {
        window.localStorage.setItem("darkMode", true);
        addDarkTheme();
    } else {
        window.localStorage.setItem("darkMode", false);
        removeDarkTheme();
    }
}