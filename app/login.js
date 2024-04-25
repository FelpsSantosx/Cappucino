const btn = document.getElementById("btn")
const senha = document.getElementById("senha")

function verificaSenha(idTag) {
    const item = document.getElementById(`${idTag}`)
    if (item.value.length < 8) {
        item.classList.remove('is-valid')
        item.classList.add("is-invalid")
    }
    else if (!item.classList.contains('is-valid')) {
        item.classList.remove('is-invalid')
        item.classList.add("is-valid")
    }
}

function ativarBotao() {
    if (senha.classList.contains('is-valid')) {
     btn.disabled = false
    }
    if (senha.classList.contains('is-invalid')) {
     btn.disabled = true
    }
    if (senha.disabled == true) {
        console.log('style');
     btn.style = "#bntentar:hover{nome}"
    }
}

document.getElementById('senha').addEventListener('input', function () {
    verificaSenha('senha')
})
senha.addEventListener('input', function () {
    ativarBotao()
    console.log("bnt");
})