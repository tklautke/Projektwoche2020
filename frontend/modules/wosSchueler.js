
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main()
});

function main() {
    document.getElementById("btn-wos").addEventListener("click", valueFromInputWos);
}

