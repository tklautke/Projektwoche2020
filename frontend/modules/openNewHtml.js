/**
 * @author tklautke
 * @description this opnens the teacher or pupil view
 * @param teacher detects if the login was a teacher or a student
 */
function openNewHtmlPage(teacher) {
    if(teacher){
        window.location.href = 'http://localhost:8080/wosLehrer';
    }else{
        window.location.href = 'http://localhost:8080/wosSchueler';
    }
}
