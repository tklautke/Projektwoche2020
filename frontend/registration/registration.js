const url = "http://localhost:8080";

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

    const obj = {
        "FirstName": firstName,
        "LastName":lastName,
        "Username": userName,
        "Password": password
    };

    console.log(obj);
    const objString = JSON.stringify(obj);
    sendRegistrationJsonToServer(objString);
}

function sendRegistrationJsonToServer(objString) {
    console.log(objString);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", `${url}/registration`);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
        console.log("1");
        if(xhttp.readyState == 4 && xhttp.status == 200){
            console.log(`status 200 (${url}/registration)`);
            const xhttpResponse = xhttp.response;
            console.log(xhttpResponse);
        }else if(xhttp.readyState == 4 && xhttp.status == 422){
            console.log(`status 200 (${url}/registration)`);
            //TODO open a error Modal
        }else if(xhttp.readyState == 4 && xhttp.status == 500){
            console.log(`status 200 (${url}/registration)`);
            //TODO open a error Modal
        }else {
            console.log("somthing is wrong")
        }
    };
    xhttp.send(objString);
}
