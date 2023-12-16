export function isAuthenticated() {
    let prePath = "./";
    let isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (!isAuth) {
        if (window.location.pathname == "/index.html") prePath ="./html/";
        window.location = prePath + "login.html";
    }
}