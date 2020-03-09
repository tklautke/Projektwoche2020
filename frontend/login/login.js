function valueFromInputLogin() {
    const userName = document.getElementById("user-name-login").value;
    const password = document.getElementById("password-login").value;

    console.log(`The Value for Username is: ${userName}`);
    console.log(`The Value for Password is: ${password}`);

    const obj = {
        "Username": userName,
        "Password": password
    };

    console.log(obj);
    const objString = JSON.stringify(obj);

    const url = "/login";
    sendJsonToServer(objString, url);
}
