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
    const type = document.getElementById("typ-registration").value;

    const obj = {
        "FirstName": firstName,
        "LastName":lastName,
        "Username": userName,
        "Password": password,
        "typ": type
    };

    console.log(obj);
    const objString = JSON.stringify(obj);

    const url = "/registration";
    sendJsonToServer(objString, url);
}
