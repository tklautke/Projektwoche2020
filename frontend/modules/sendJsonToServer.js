const host = "http://localhost:8080";

function sendJsonToServer(objString, url) {
    console.log(objString);
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", host + url);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200){
            console.log(`status 200 (${host}${url})`);
            const xhttpResponse = xhttp.response;
            console.log(xhttpResponse);
            if (xhttpResponse === "err"){
                openWrongPasswordModal();
            }else if (xhttpResponse == "wrong password"){
                openWrongPasswordModal();
            }
        }else if(xhttp.readyState == 4 && xhttp.status == 422){
            console.log(`status 200 (${host}${url})`);
            //TODO open a error Modal
        }else if(xhttp.readyState == 4 && xhttp.status == 500){
            console.log(`status 200 (${host}${url})`);
            //TODO open a error Modal
        }
    };
    xhttp.send(objString);
}
