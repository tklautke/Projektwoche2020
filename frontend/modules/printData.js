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
