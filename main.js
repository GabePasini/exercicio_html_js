const form = document.getElementById('validation');
var fieldA = document.getElementById('field-A');
var fieldB = document.getElementById('field-B');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(fieldA.value);
    const valorB = parseFloat(fieldB.value);

    const mensagemSucesso = `O segundo valor (${valorB}) é maior que o primeiro (${valorA})`;
    const mensagemErro = `O segundo valor (${valorB}) deve ser maior que o primeiro (${valorA}), insira outros valores`;

    if (!isNaN(valorA) && !isNaN(valorB)) {
        if (valorB > valorA) {
            const containerMensagemSucesso = document.querySelector('.success-message');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

            fieldA.value = '';
            fieldB.value = '';
        } else {
            const containerMensagemErro = document.querySelector('.error-message');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        }
    }
});

fieldB.addEventListener('keyup', function() {
    const valorA = parseFloat(fieldA.value);
    const valorB = parseFloat(fieldB.value);

    if (!isNaN(valorA) && !isNaN(valorB)) {
        if (valorB <= valorA) {
            fieldB.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block';
        } else {
            fieldB.style.border = '';
            document.querySelector('.error-message').style.display = 'none';
        }
    }
});
