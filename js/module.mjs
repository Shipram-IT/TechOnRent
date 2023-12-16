export function isAuthenticated() {
    let prePath = "./";
    let isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
    if (!isAuth) {
        let path = window.location.pathname.split("/");
        let length = path.length;
        if (path[length - 1] == "index.html" || path[length - 1] == '') prePath ="./html/";
        window.location = prePath + "login.html";
    }
}