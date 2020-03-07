/**
 *  @link main
 *  @author tklautke
 *  @description this function detects if the dom is fully loaded.
 */
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main()
});

/**
 *  @link valueFromInput
 *  @author tklautke
 *  @description this is the main function, which is includes the "btn" blick event
 */
function main() {
    document.getElementById("btn").addEventListener("click", valueFromInput);
}

/**
 *  @link convertValueFromInputIntoJson
 *  @author tklautke
 *  @description this function is getting the values of the registration input fields
 */
function valueFromInput() {
    const firstName = document  = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const userName = document.getElementById("user-name").value;
    const password = document.getElementById("password").value;

    console.log(`The Value for Firstname is: ${firstName}`);
    console.log(`The Value for Lastname  is: ${lastName}`);
    console.log(`The Value for Username is: ${userName}`);
    console.log(`The Value for Password is: ${password}`);

    convertValueFromInputIntoJson(firstName, lastName, userName, password);
}

/**
 * @param firstName
 * @param lastName
 * @param userName
 * @param password
 * @description is putting all input values of the registration into a JSON object.
 * @author tklautke
 */
function convertValueFromInputIntoJson(firstName, lastName, userName, password) {
    const obj = {
        "FirstName": firstName,
        "LastName":lastName,
        "Username": userName,
        "Password": password
    };
    console.log(obj)
}
