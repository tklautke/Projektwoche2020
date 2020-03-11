/**
 * @author tklautke
 * @description this is setting a hint that the password is wrong
 */
function openWrongPassword() {
    document.getElementById("login-err-password-modal").style.display = "unset";
}

/**
 * @author tklautke
 * @description this is unsetting a hint that the password is wrong
 */
function closePassword() {
    document.getElementById("login-err-password-modal").style.display = "none";
}
