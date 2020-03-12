/**
 * @author tklautke
 * @description this opens the print view and ios giving the current WOS input data in the localstorage
 * @param obj has the data from the wos form inputs
 */
function openPrintView(obj) {
    console.log(obj);
    window.location.href = 'http://localhost:8080/print';

    localStorage.setItem("firstName", obj.firstName);
    localStorage.setItem("lastName", obj.lastName);
    localStorage.setItem("schoolClass", obj.schoolClass);
    localStorage.setItem("adress", obj.adress);
    localStorage.setItem("city", obj.city);
    localStorage.setItem("zipCode", obj.zipCode);
    localStorage.setItem("discipline", obj.discipline);
    localStorage.setItem("performanceLevel", obj.performanceLevel);
}

/**
 * @author tklautke
 * @description this is getting the WOS data out of the localstorage and is setting the .innerHTML in the print.html
 */
function printDataHTML() {
    document.getElementById('print-firstname').innerHTML = localStorage.getItem("firstName");
    document.getElementById('print-lastname').innerHTML = localStorage.getItem("lastName");
    document.getElementById('print-classname').innerHTML = localStorage.getItem("schoolClass");
    document.getElementById('print-adress').innerHTML = localStorage.getItem("adress");
    document.getElementById('print-city').innerHTML = localStorage.getItem("city");
    document.getElementById('print-plz').innerHTML = localStorage.getItem("zipCode");
    document.getElementById('print-discipline').innerHTML = localStorage.getItem("discipline");
    document.getElementById('print-performance-class').innerHTML = localStorage.getItem("performanceLevel");
}
