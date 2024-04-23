const produtos = [
    {id:"1",  imagem:"assents/cappucino.png", nome:"Front-End", descrição:"Tradicional", preco:"12.90"}, 
    {id:"2",  imagem:"assents/cappucino.png", nome:"Back-End", descrição:"Tradicional", preco:"12.90"}  
]

console.log(produtos)

function gerarHTMLProduto(produto) {
    return  `
    <div id="container__produtos">
    <ul class="lista__produtos">
        <li class="produto">
            <img src="${produto.imagem}" alt="Produto">
            <h2 class="produto__titulo">${produto.nome}</h2>
            <p class="produto__descricao">${produto.descrição}</p>
            <span class="preco">R$${produto.preco}</span>
            <button class="btn__add-carrinho" id="${produto.id}"
                onclick="window.location.href = 'produto.html';">comprar</button>
        </li>
    </ul>
</div>`;
}

function exibirProdutos() {
    const container = document.getElementById("container__produtos");
    let htmlProdutos = "";

    produtos.forEach(produto => {
        htmlProdutos += gerarHTMLProduto(produto);
    });

    container.innerHTML = htmlProdutos;
}

window.onload = exibirProdutos;