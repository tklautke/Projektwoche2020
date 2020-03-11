
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main()
});


function main() {
    document.getElementById("btn-registration").addEventListener("click", valueFromInputRegistration);
    document.getElementById("btn-login").addEventListener("click", valueFromInputLogin);
}
