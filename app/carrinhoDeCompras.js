

window.onload = function () {

    const indexProdutoCarrinho = localStorage.getItem("indexProdutoCarrinho");

    if (indexProdutoCarrinho !== null) {
        const produtoCarrinho = produtoSelecionado[indexProdutoCarrinho];

    const carrinhoDeCompra = document.getElementById("container__carrinho")
    carrinhoDeCompra.innerHTML = `
    <div class="container__carrinho">

            <h1>Seu Carrinho</h1>
            <div class="separa__carrinho">
                <div class="seu__carrinho">
                    <img src=${produtoCarrinho.imagem} alt="">
                    <h2>${produtoCarrinho.nome}</h2>
                    <h2>R$ ${produtoCarrinho.preco}</h2>
                </div>
            </div>
            <h1>Resumo</h1>

            <div class="resumo">
                <p>vendindo por Cappuccinododev</p>
                <h3>R$ 54.90</h3>
                <button>Comprar</button>
                <button>Apagar</button>
            </div>

        </div>
    `
    } else {
        // Exibir mensagem indicando que o carrinho está vazio
        console.log("Carrinho vazio!");
      }
}




