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

    console.log(obj)

    //firstName, lastName, schoolClass, adress, city

}

function printDataHTML() {

    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const schoolClass = localStorage.getItem("schoolClass");
    const adress = localStorage.getItem("adress");
    const city = localStorage.getItem("city");
    const zipCode = localStorage.getItem("zipCode");
    const discipline = localStorage.getItem("discipline");
    const performanceLevel = localStorage.getItem("performanceLevel");

    document.getElementById('print-firstname').innerHTML = firstName;
    document.getElementById('print-lastname').innerHTML = lastName;
    document.getElementById('print-classname').innerHTML = schoolClass;
    document.getElementById('print-adress').innerHTML = adress;
    document.getElementById('print-city').innerHTML = city;
    document.getElementById('print-plz').innerHTML = zipCode;
    document.getElementById('print-discipline').innerHTML = discipline;
    document.getElementById('print-performance-class').innerHTML = performanceLevel;


}
