window.onload = function() {
    // Recuperar os detalhes do produto armazenados na memória do navegador
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));

    // Exibir os detalhes do produto na página
    const containerDetalhes = document.getElementById("produto__principal");
    containerDetalhes.innerHTML = `
    <main id="produto__principal">
    <div class="containerdetalhe">
        <div class="produto__detalhe">
            <img class="img" src=${produtoSelecionado.imagem} alt="">
            <div class="detalhe">
                <h2>${produtoSelecionado.nome}</h2>
                <p>${produtoSelecionado.descricao}</p>
                <h1>R$${produtoSelecionado.preco}</h1>
                <p>Todos os nosso produtos tem a mesma quantidade de <strong>320ml</strong></p>
                <p>vendindo por Cappuccinododev</p>
                <button>comprar</button>
            </div>
        </div>
    </div>
</main>
    `;
};
