function validateForm(form) {
    const cpf = document.getElementById('cpf')
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')

    const masc = document.getElementById('masc')
    const fem = document.getElementById('fem')
    const outro = document.getElementById('outro')

    const motivo = document.getElementById('motivo')

    if (cpf.value == '' || nome.value == '' || email.value == '' || motivo.value == '') {
        alert('Você deve preencher os campos obrigatórios.')
        return
    } else if (masc.checked == false && fem.checked == false && outro.checked == false) {
        alert('Por favor, escolha uma das opções de sexo.')
        return
    } else {
        form.submit()
        alert('Agradecemos pela comunicação!')
        location.replace('index.html')
    }
}

function validateLoginForm(form) {
    const cpf = document.getElementById('cpf')
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')

    senha = document.getElementById('senha')
    senha2 = document.getElementById('senha2')

    if (cpf.value == '' || nome.value == '' || email.value == '') {
        alert('Você deve preencher todos os campos.')
        return
    } else if (senha.value != senha2.value) {
        alert('As duas senhas devem ser iguais.')
        return
    } else {
        form.submit()
        alert('Login realizado!')
        location.replace('index.html')
    }
}