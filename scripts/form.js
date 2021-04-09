function validateForm() {
    const masc = document.getElementById('masc')
    const fem = document.getElementById('fem')
    const outro = document.getElementById('outro')

    if (masc.checked == false && fem.checked == false && outro.checked == false) {
        alert('Por favor, escolha uma das opções de sexo.')
    }
}

function validaSenha() {}