var password = "123"; 

function password() {

    if(document.getElementById('pass1').value != password ) {
        alert('wrong password, try agin')
        return false;
    }
    if(document.getElementById('pass1').value == password ) {
        alert('Correct passwrod. click ok to enter webpage')
    }
}