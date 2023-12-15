function changeMode(e) {
    console.log(document.getElementsByTagName('body'));
    if (e.checked == true) {
        window.localStorage.setItem("darkMode", true);
        document.styleSheets.item(1).disabled = false;
    } else {
        window.localStorage.setItem("darkMode", false);
        document.styleSheets.item(1).disabled = true;
    }
}