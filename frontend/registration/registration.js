/**
 *  @link sendJsonToServer
 *  @author tklautke
 *  @description this function is getting the values of the registration input fields
 */
function valueFromInputRegistration() {
    const firstName = document  = document.getElementById("first-name-registration").value;
    const lastName = document.getElementById("last-name-registration").value;
    const userName = document.getElementById("user-name-registration").value;
    const password = document.getElementById("password-registration").value;

    console.log(`The Value for Firstname is: ${firstName}`);
    console.log(`The Value for Lastname  is: ${lastName}`);
    console.log(`The Value for Username is: ${userName}`);
    console.log(`The Value for Password is: ${password}`);

    const obj = {
        "FirstName": firstName,
        "LastName":lastName,
        "Username": userName,
        "Password": password
    };

    const url = "/registration";
    sendJsonToServer(obj, url);
}
