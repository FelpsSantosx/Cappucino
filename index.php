<?php
    
    session_start();  
    if((!isset($_SESSION["id"]) == true) && (!isset($_SESSION["nome"])) == true) 
    {
        unset( $_SESSION["id"] );
        unset( $_SESSION["nome"] );
        header("lacation: login.php");
    }
    $logado = $_SESSION["nome"];
    ?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    <title>Cappucino com Dev</title>
    <link rel="icon" href="assents/228068-P2NIA8-453.jpg">
</head>

<body>
    <header>
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="index.php">
                    <h1>CAPPUCCINODODEV</h1>
                </a>
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Quem somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="cadastre-se.php">Cadastre-se</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="log-in.php">Entre</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="carrinho.html"><img class="carrinho__compra" src="assents/Vector.png" alt=""></a>
                    </li> <li class="nav-item">
                        <a class="nav-link" href="#"><img class="perfil" src="assents/icn user .icn-sm.png" alt=""></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <main>
        <section id="introducao">
            <div class="banner__introducao">
                <h3 class="banner__titulo">Café tão bom que seu paladar vai adorar</h3>
                <h5 class="banner__subTitulo">O melhor grão, a torra mais fina, o sabor poderoso</h5>
                <input class="banner__pesquisa" type="text" placeholder="Pesquise aqui o seu cappucino">
            </div>
            <img src="assents/Cappucino.png" alt="Foto cappucino">
        </section>

        <section id="carrossel">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="assents/banner promo.png" class="d-block w-40" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="assents/banner no promo.png" class="d-block w-40" alt="...">
                    </div>
                </div>
            </div>
        </section>

        <section id="produtos">
            <h1 class="titulo__produto">Cappuccinos</h1>
            <div id="container__produtos"></div>
        </section>

        <section id="forms">
            <form action="https://api.staticforms.xyz/submit" method="post">
            <div class="card__forms">
                <h2>Fale Conosco</h2>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Seu E-mail</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1"  class="form-label">Digite aqui</label>
                    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="submit" class="btn btn-secondary">Submit</button>
                </div>
            </div>

            <input type="hidden" name="accessKey" value="6ca48182-902d-42e7-8acf-00bd8e338778">
            <input type="hidden" name="redirectTo" value="http://localhost/Cappucino/index.php">
            </form>
        </section>

    </main>

    <footer>
        <div class="rodape">
            <div class="copyright">
                <p><a href="/politica-de-privacidade">Política de Privacidade</a> | <a href="/termos-de-servico">Termos
                        de Serviço</a></p>
                <p>&copy; 2024 Cappucino com Dev. Todos os direitos reservados a Felipe Souza Santos.</p>
            </div>
            <div class="contato">
                <h3>Entre em Contato</h3>
                <p>Endereço: Av. Mario leal, 123</p>
                <p>Telefone: (71) 98458-5787</p>
                <p>E-mail: cappucinocomdev@gmail.com</p>
            </div>
            <div class="links">
                <h3>Links</h3>
                <ul>
                    <li><a href="/">Página Inicial</a></li>
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/sobre">Sobre Nós</a></li>
                </ul>
            </div>
        </div>
    </footer>

    <script src="app/detalhesDoProduto.js"></script>
    <script src="app/produtos.js"></script>

</body>

</html>