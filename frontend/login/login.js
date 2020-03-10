function valueFromInputLogin() {
    const userName = document.getElementById("user-name-login").value;
    const password = document.getElementById("password-login").value;
    const teacher = document.getElementById("login-checkbox-teacher").checked;



    console.log(`The Value for Username is: ${userName}`);
    console.log(`The Value for Password is: ${password}`);

    console.log(teacher);

    const obj = {
        "Username": userName,
        "Password": password
    };

    console.log(obj);
    const objString = JSON.stringify(obj);

    const url = "/login";
    sendJsonToServer(objString, url, teacher);
}
