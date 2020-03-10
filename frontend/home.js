/**
 *  @link main
 *  @author tklautke
 *  @description this function detects if the dom is fully loaded.
 */
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main()
});

/**
 *  @link valueFromInput
 *  @author tklautke
 *  @description this is the main function, which is includes the "btn" blick event
 */
function main() {
    document.getElementById("btn-wos").addEventListener("click", valueFromInputWos);
}
