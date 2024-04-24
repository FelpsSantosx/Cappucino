window.onload = function() {
    // Recuperar os detalhes do produto armazenados na memória do navegador
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));

    // Exibir os detalhes do produto na página
    const containerDetalhes = document.getElementById("produto__principal");
    containerDetalhes.innerHTML = `
    <main id="produto__principal">
    <div class="produto__imagem">
      <img src="${produtoSelecionado.imagem}" alt="Produto">
    </div>
    <div class="produto__sobre">
      <h2>${produtoSelecionado.nome}</h2>
      <p>${produtoSelecionado.descrição}</p>
      <label for="ul">Tamanho</label>
      <ul>
        <li><button>pequeno</button></li>
        <li><button>médio</button></li>
        <li><button>grande</button></li>
      </ul>
      <h3>R$ ${produtoSelecionado.preco}</h3>
    </div>
    <div class="produto__resumo">
      <h2>Detalhes da compra</h2>
      <h3>Preço: R$ ${produtoSelecionado.preco}</h3>
      <input type="button" value="quantidade">
      <p>uma grande quantidade <br> pode gerar falta do pedido</p>
      <button>Adicionar ao carrinho</button>
      <button>Compre agora</button>
      <p>Vendido por <strong>Cappuccionododev</strong></p>
    </div>
  </main>
    `;
};
