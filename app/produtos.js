const produtos = [
    { id: 0, imagem: "assents/cappucino.png", nome: "Front-End", descrição: "Tradicional", preco: "12.90" },
    { id: 1, imagem: "assents/cappucino.png", nome: "Back-End", descrição: "Tradicional", preco: "12.90" },
]

function gerarHTMLProduto(produto, index) {
    return `
    <div id="container__produtos">
    <ul class="lista__produtos">
        <li class="produto">
            <img src="${produto.imagem}" alt="Produto">
            <h2 class="produto__titulo">${produto.nome}</h2>
            <p class="produto__descricao">${produto.descrição}</p>
            <span class="preco">R$${produto.preco}</span>
            <button class="btn__add-carrinho" data-index="${index}" >comprar</button>
        </li>
    </ul>
</div>`;
}

function exibirProdutos() {
    const container = document.getElementById("container__produtos");
    let htmlProdutos = "";

    produtos.forEach((produto, index) => {
        htmlProdutos += gerarHTMLProduto(produto, index);
    });

    container.innerHTML = htmlProdutos;

    const btnProdutos = document.querySelectorAll(".btn__add-carrinho");

    btnProdutos.forEach(btnProduto => {
        btnProduto.addEventListener("click", handleClick);
    });

}

function handleClick(event) {
    const indexProduto = parseInt(event.target.dataset.index);
    const produtoSelecionado = produtos[indexProduto];

    // Armazenar os detalhes do produto selecionado na memória do navegador
    localStorage.setItem("produtoSelecionado", JSON.stringify(produtoSelecionado));

    // Redirecionar para a página de detalhes do produto
    window.location.href = "produto.html";
}



window.onload = exibirProdutos;