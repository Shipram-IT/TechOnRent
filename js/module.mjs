export function isAuthenticated() {
    let prePath = "./";
    let isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (!isAuth) {
        if (window.location.pathname == "/index.html" || window.location.pathname == '/') prePath ="./html/";
        window.location = prePath + "login.html";
    }
}