function valueFromInputLogin() {
    const userName = document.getElementById("user-name-login").value;
    const password = document.getElementById("password-login").value;

    console.log(`The Value for Username is: ${userName}`);
    console.log(`The Value for Password is: ${password}`);

    const obj = {
        "Username": userName,
        "Password": password
    };

    const url = "/login";
    sendJsonToServer(obj, url);
}
