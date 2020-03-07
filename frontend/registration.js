window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main()
});

function main() {
    document.getElementById("btn").addEventListener("click", valueFromInput);
}

function valueFromInput() {
    const firstName = document  = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const userName = document.getElementById("user-name").value;
    const password = document.getElementById("password").value;

    console.log(`The Value for Firstname is: ${firstName}`);
    console.log(`The Value for Lastname  is: ${lastName}`);
    console.log(`The Value for Username is: ${userName}`);
    console.log(`The Value for Password is: ${password}`)

    convertValueFromInputintoJson(firstName, lastName, userName, password)
}

function convertValueFromInputintoJson(firstName, lastName, userName, password) {
    const obj = {
        "FirstName": firstName,
        "LastName":lastName,
        "Username": userName,
        "Password": password
    };
    console.log(obj)
}


