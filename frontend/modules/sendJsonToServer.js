function sendJsonToServer(objString, url, teacher) {
    const host = "http://localhost:8080";
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", host + url);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            console.log(`status 200 (${host}${url})`);
            const xhttpResponse = xhttp.response;
            if (xhttpResponse === "err"){
                openWrongPassword();
            }else if (xhttpResponse == "wrong password"){
                openWrongPassword();
            }else if(xhttpResponse == "correct credentials"){
                closePassword();
                openNewHtmlPage(teacher);
            }
        }else if(xhttp.readyState == 4 && xhttp.status == 422){
            console.log(`status 422 (${host}${url})`);
        }else if(xhttp.readyState == 4 && xhttp.status == 500){
            console.log(`status 500 (${host}${url})`);
        }
    };
    xhttp.send(objString);
}
