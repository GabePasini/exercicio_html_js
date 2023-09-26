const form = document.getElementById('validation');
const fieldA = document.getElementById('field-A').value;
const fieldB = document.getElementById('field-B').value;
let formEValido = false;

if (fieldA > fieldB) {
    document.querySelector('.error-message').style.display ='block';
}