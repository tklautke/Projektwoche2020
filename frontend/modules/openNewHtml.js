function openNewHtmlPage(teacher) {
    if(teacher){
        window.location.href = 'http://localhost:8080/wosLehrer';
    }else{
        window.location.href = 'http://localhost:8080/wosSchueler';
    }
}
