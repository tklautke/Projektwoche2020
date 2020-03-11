function valueFromInputLogin() {
    const userName = document.getElementById("user-name-login").value;
    const password = document.getElementById("password-login").value;
    const teacher = document.getElementById("login-checkbox-teacher").checked;

    const obj = {
        "Username": userName,
        "Password": password
    };

    const objString = JSON.stringify(obj);

    const url = "/login";
    sendJsonToServer(objString, url, teacher);
}
