const btn = document.getElementById("btn")
const senha = document.getElementById("senha")

function verificaSenha(idTag) {
    const item = document.getElementById(`${idTag}`)
    if (item.value.length < 8) {
        item.classList.remove('esta_valido')
        item.classList.add("esta__invalido")
    }
    else if (!item.classList.contains('esta_valido')) {
        item.classList.remove('esta__invalido')
        item.classList.add("esta_valido")
    }
}

function ativarBotao() {
    if (senha.classList.contains('esta_valido')) {
     btn.disabled = false
    }
    if (senha.classList.contains('esta__invalido')) {
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