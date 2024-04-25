const produtos = [
    { id: 0, imagem: "assents/cappucino_tradicional.jpg", nome: "Tradicional", descricao: "Bebida italiana preparada com<br>café expresso e leite", preco: "22,83" },
    { id: 1, imagem: "assents/cappucino_preto.jpeg", nome: "Ristretto", descricao: "Bebida italiana com café <br>expresso mais concentrado", preco: "20.90" },
    { id: 2, imagem: "assents/cappucino_gelato.jpeg", nome: "Gellato", descricao: "Bebida italiana com café <br>expresso e gelo", preco: "21.99" },
    { id: 3, imagem: "assents/ice_coffee.jpeg", nome: "Cream Coffee", descricao: "Um delicioso café expresso <br>com sorvete baunilha", preco: "32.90" },
    { id: 4, imagem: "assents/cappucino_caramelo.jpeg", nome: "creamello", descricao: "Bebida italiana com café <br>caramelo e sorvete creme", preco: "28.95" },
    { id: 5, imagem: "assents/sobremesa_caramelo.jpeg", nome: "Creammallow", descricao: "sorvete nespresso com <br> marshmallow caramelo", preco: "30.95" },
    { id: 6, imagem: "assents/Chocoffee.jpeg", nome: "Chocoffee", descricao: "Bebida italiana com café <br>expresso e chocolate", preco: "26.95" },
    { id: 7, imagem: "assents/cappucino_docedeleite.jpeg", nome: "Docecappu", descricao: "Bebida italiana com café <br>expresso e doce de leite", preco: "25.95" },
]

function gerarHTMLProduto(produto, index) {
    return `
    <div id="container__produtos">
    <ul class="lista__produtos">
        <li class="produto">
            <img src="${produto.imagem}" alt="Produto">
            <h2 class="produto__titulo">${produto.nome}</h2>
            <p class="produto__descricao">${produto.descricao}</p>
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