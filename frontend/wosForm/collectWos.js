/**
 *  @link sendJsonToServer
 *  @author tklautke
 *  @description this function is getting the values of the Wos input fields
 */
function valueFromInputWos() {
    const firstName = document = document.getElementById("first-name-wos").value;
    const lastName = document = document.getElementById("last-name-wos").value;
    const schoolClass = document = document.getElementById("select-class-wos").value;
    const adress = document = document.getElementById("inputAddress-wos").value;
    const city = document = document.getElementById("inputCity-wos").value;
    const zipCode = document = document.getElementById("inputZip-wos").value;
    const discipline = document = document.getElementById("discipline-input-wos").value;
    const performanceLevel = document = document.getElementById("performance-level-wos").value;

    console.log(firstName, lastName, schoolClass, adress, city, zipCode, discipline, performanceLevel);

    const obj = {
        "firstName": firstName,
        "lastName": lastName,
        "schoolClass": schoolClass,
        "adress": adress,
        "city": city,
        "zipCode": zipCode,
        "discipline": discipline,
        "performanceLevel": performanceLevel
    };

    console.log(obj);
    const objString = JSON.stringify(obj);

    const url = "/wosInput";
    sendJsonToServer(objString, url);
}

function acceptPupilWos() {
    const signed = document = document.getElementById("accept-pupil-signed").checked;
    const payed = document = document.getElementById("accept-pupil-payed").checked;
    const lastname = document = document.getElementById("lastname-accept").value;

    console.log(signed, payed);

    const url = "/accept-pupil";

    const obj = {
        "lastname": lastname,
        "signed": signed,
        "payed": payed
    };

    console.log(obj);
    const objString = JSON.stringify(obj);

    sendJsonToServer(objString, url);
}
