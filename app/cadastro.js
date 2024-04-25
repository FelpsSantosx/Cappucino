const nome = document.getElementById("fnome")
const sobrenome = document.getElementById("fsobrenome")
const cpf = document.getElementById("fcpf")
const senha = document.getElementById("fsenha")
const confsenha = document.getElementById("fconfsenha")
const btn = document.getElementById("fbtn")

function verificaBasico(idTag){
    const item = document.getElementById(`${idTag}`)
    if(item.value == ''){
        item.classList.remove('is-valid')
        item.classList.add("is-invalid")
    }                                                      
    else if(!item.classList.contains('is-valid')){
        item.classList.remove('is-invalid')
        item.classList.add("is-valid")   
    }
}
function verificaSenha(idTag) {
    const item = document.getElementById(`${idTag}`)
    if(item.value.length < 8){
        item.classList.remove('is-valid')
        item.classList.add("is-invalid")
    }                                                  
    else if(!item.classList.contains('is-valid')){
        item.classList.remove('is-invalid')
        item.classList.add("is-valid")  
    }
}
function ativarBotao() {
    if (nome.classList.contains('is-valid') && sobrenome.classList.contains('is-valid') && cpf.classList.contains('is-valid') && senha.classList.contains('is-valid') && confsenha.classList.contains('is-valid')) {
        btn.disabled = false
    }
    if (nome.classList.contains('is-invalid') || sobrenome.classList.contains('is-invalid') || cpf.classList.contains('is-invalid') || senha.classList.contains('is-invalid') || confsenha.classList.contains('is-invalid')) {
        btn.disabled = true
    }                                                 
}

document.getElementById('fcpf').addEventListener("input", function() {
    const item = document.getElementById('fcpf')
    console.log(item.value.length);
    if(item.value == '' || item.value.length > 11){
        item.classList.remove('is-valid')
        item.classList.add("is-invalid")
    }
    else if(!item.classList.contains('is-valid')){
        item.classList.remove('is-invalid')
        item.classList.add("is-valid")   
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