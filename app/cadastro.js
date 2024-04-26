const nome = document.getElementById("fnome")
const sobrenome = document.getElementById("fsobrenome")
const cpf = document.getElementById("fcpf")
const senha = document.getElementById("fsenha")
const confsenha = document.getElementById("fconfsenha")
const btn = document.getElementById("fbtn")

function verificaBasico(idTag){
    const item = document.getElementById(`${idTag}`)
    if(item.value == ''){
        item.classList.remove('esta_valido')
        item.classList.add("esta__invalido")
    }                                                      
    else if(!item.classList.contains('esta_valido')){
        item.classList.remove('esta__invalido')
        item.classList.add("esta_valido")   
    }
}
function verificaSenha(idTag) {
    const item = document.getElementById(`${idTag}`)
    if(item.value.length < 8){
        item.classList.remove('esta_valido')
        item.classList.add("esta__invalido")
    }                                                  
    else if(!item.classList.contains('esta_valido')){
        item.classList.remove('esta__invalido')
        item.classList.add("esta_valido")  
    }
}
function ativarBotao() {
    if (nome.classList.contains('esta_valido') && sobrenome.classList.contains('esta_valido') && cpf.classList.contains('esta_valido') && senha.classList.contains('esta_valido') && confsenha.classList.contains('esta_valido')) {
        btn.disabled = false
    }
    if (nome.classList.contains('esta__invalido') || sobrenome.classList.contains('esta__invalido') || cpf.classList.contains('esta__invalido') || senha.classList.contains('esta__invalido') || confsenha.classList.contains('esta__invalido')) {
        btn.disabled = true
    }                                                 
}

document.getElementById('fcpf').addEventListener("input", function() {
    const item = document.getElementById('fcpf')
    console.log(item.value.length);
    if(item.value == '' || item.value.length > 11){
        item.classList.remove('esta_valido')
        item.classList.add("esta__invalido")
    }
    else if(!item.classList.contains('esta_valido')){
        item.classList.remove('esta__invalido')
        item.classList.add("esta_valido")   
    }
    ativarBotao()
})

document.getElementById('fcpf').addEventListener("keydown", function(event) {
    // Obter o código da tecla pressionada
    let key = event.keyCode;
    // Desativar letras (códigos ASCII 65-90 e 97-122)
    if ((key >= 60 && key <= 90) || (key >= 106 && key <= 200)) {
        event.preventDefault();
    }
    ativarBotao()
})
document.getElementById("fnome").addEventListener('input', function(){
    verificaBasico("fnome")
    ativarBotao()
    
})
document.getElementById("fsobrenome").addEventListener('input', function(){
    verificaBasico("fsobrenome")
    ativarBotao()
})
document.getElementById("fsenha").addEventListener('input',function(){  
    verificaSenha('fsenha')
    ativarBotao()
})
document.getElementById("fconfsenha").addEventListener('input', function(){
    verificaSenha('fconfsenha')
    ativarBotao()
})
document.getElementById('fsenha').addEventListener('input', function(){
    console.log("ativo");
    verificaSenha('senha')
})